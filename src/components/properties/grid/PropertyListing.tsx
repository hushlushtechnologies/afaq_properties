"use client";

import { useEffect, useMemo, useRef, useState, type FormEvent } from "react";
import { useRouter, useSearchParams, usePathname } from "next/navigation";
import { motion, useReducedMotion } from "framer-motion";
import {
  LayoutGrid,
  List,
  RotateCcw,
  Search as SearchIcon,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { Section } from "@/components/layout/Section";
import { SearchInput } from "@/components/ui/SearchInput";
import { SelectDropdown } from "@/components/ui/SelectDropDown";
import { RangeSlider } from "@/components/ui/RangeSlider";
import { FilterChip } from "@/components/ui/FilterChip";
import { EmptyState } from "@/components/ui/EmptyState";
import { NoPropertiesIcon } from "@/components/ui/NoPropertiesIcon";
import { Button } from "@/components/ui/Button";
import { PropertyCard } from "@/components/home/featuredproperties/PropertyCard";
import { PropertyListCard } from "@/components/properties/grid/PropertyListCard";
import { PropertyCardSkeleton } from "@/components/properties/grid/PropertyCardSkeleton";
import { EASE_SMOOTH } from "@/lib/motion";
import {
  getAllPublishedProperties,
  filterProperties,
  sortProperties,
  getPriceBounds,
  getCategoryOptions,
  getStatusOptions,
  BEDROOM_FILTER_OPTIONS,
  SORT_OPTIONS,
  getEmirateLabel,
  getCommunityLabel,
  getCategoryLabel,
  getStatusLabel,
  type PropertyFilterValues,
  type PropertySort,
} from "@/lib/properties";
import { getAllDevelopers, getDeveloperLabel } from "@/lib/developers";
import { getCommunitiesForEmirate } from "@/lib/locations";
import emiratesData from "@/data/hero/emirates.json";
import type { EmirateData } from "@/types/emirate";
import type {
  Emirate,
  PropertyCategory,
  PropertyStatus,
} from "@/types/property";

const PAGE_SIZE = 9;

interface PropertiesListingProps {
  fixedStatus?: PropertyStatus;
}

export function PropertiesListing({ fixedStatus }: PropertiesListingProps) {
  const shouldReduceMotion = useReducedMotion();
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const allProperties = useMemo(() => getAllPublishedProperties(), []);
  const priceBounds = useMemo(
    () => getPriceBounds(allProperties),
    [allProperties],
  );

  const initialFilters: PropertyFilterValues = {
    search: searchParams.get("search") ?? "",
    emirate: searchParams.get("emirate") ?? "",
    community: searchParams.get("community") ?? "",
    status: fixedStatus ?? searchParams.get("status") ?? "",
    category: searchParams.get("category") ?? "",
    bedrooms: searchParams.get("bedrooms") ?? "",
    developer: searchParams.get("developer") ?? "",
    minPrice: Number(searchParams.get("minPrice")) || priceBounds.min,
    maxPrice: Number(searchParams.get("maxPrice")) || priceBounds.max,
  };

  // Draft state — what the form fields show while the user is adjusting them
  const [search, setSearch] = useState(initialFilters.search);
  const [emirate, setEmirate] = useState(initialFilters.emirate);
  const [community, setCommunity] = useState(initialFilters.community);
  const [status, setStatus] = useState(initialFilters.status);
  const [category, setCategory] = useState(initialFilters.category);
  const [bedrooms, setBedrooms] = useState(initialFilters.bedrooms);
  const [developer, setDeveloper] = useState(initialFilters.developer);
  const [priceRange, setPriceRange] = useState<[number, number]>([
    initialFilters.minPrice,
    initialFilters.maxPrice,
  ]);

  // Applied state — what actually filters the data + syncs the URL. Only updates on Search submit / chip removal / reset.
  const [appliedFilters, setAppliedFilters] =
    useState<PropertyFilterValues>(initialFilters);

  const [sort, setSort] = useState<PropertySort>(
    (searchParams.get("sort") as PropertySort) ?? "featured",
  );
  const [view, setView] = useState<"grid" | "list">("grid");
  const [visibleCount, setVisibleCount] = useState(PAGE_SIZE);
  const [isLoadingMore, setIsLoadingMore] = useState(false);

  // URL sync — only runs when applied filters or sort actually change, not on every keystroke/drag
  useEffect(() => {
    const params = new URLSearchParams();
    if (appliedFilters.search) params.set("search", appliedFilters.search);
    if (appliedFilters.emirate) params.set("emirate", appliedFilters.emirate);
    if (appliedFilters.community)
      params.set("community", appliedFilters.community);
    if (!fixedStatus && appliedFilters.status)
      params.set("status", appliedFilters.status);
    if (appliedFilters.category)
      params.set("category", appliedFilters.category);
    if (appliedFilters.bedrooms)
      params.set("bedrooms", appliedFilters.bedrooms);
    if (appliedFilters.developer)
      params.set("developer", appliedFilters.developer);
    if (appliedFilters.minPrice !== priceBounds.min)
      params.set("minPrice", String(appliedFilters.minPrice));
    if (appliedFilters.maxPrice !== priceBounds.max)
      params.set("maxPrice", String(appliedFilters.maxPrice));
    if (sort !== "featured") params.set("sort", sort);

    const query = params.toString();
    router.replace(query ? `${pathname}?${query}` : pathname, {
      scroll: false,
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [appliedFilters, sort]);

  // Community auto-clears if it doesn't belong to the newly selected emirate (draft-level, immediate UX)
  useEffect(() => {
    if (!emirate) return;
    const validCommunities = getCommunitiesForEmirate(emirate as Emirate).map(
      (c) => c.slug,
    );
    if (community && !validCommunities.includes(community)) setCommunity("");
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [emirate]);

  useEffect(() => {
    setVisibleCount(PAGE_SIZE);
  }, [appliedFilters, sort]);

  const emirateOptions = useMemo(
    () =>
      (emiratesData as EmirateData[]).map((e) => ({
        value: e.slug,
        label: e.name,
      })),
    [],
  );
  const communityOptions = useMemo(
    () =>
      emirate
        ? getCommunitiesForEmirate(emirate as Emirate).map((c) => ({
            value: c.slug,
            label: c.name,
          }))
        : [],
    [emirate],
  );
  const statusOptions = useMemo(
    () => getStatusOptions(allProperties),
    [allProperties],
  );
  const categoryOptions = useMemo(
    () => getCategoryOptions(allProperties),
    [allProperties],
  );
  const developerOptions = useMemo(
    () => getAllDevelopers().map((d) => ({ value: d.slug, label: d.name })),
    [],
  );

  const filtered = useMemo(() => {
    const results = filterProperties(allProperties, appliedFilters);
    return sortProperties(results, sort);
  }, [allProperties, appliedFilters, sort]);

  const visibleProperties = filtered.slice(0, visibleCount);
  const hasMore = visibleCount < filtered.length;

  const sentinelRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (!hasMore) return;
    const el = sentinelRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !isLoadingMore) {
          setIsLoadingMore(true);
          setTimeout(() => {
            setVisibleCount((prev) => prev + PAGE_SIZE);
            setIsLoadingMore(false);
          }, 500);
        }
      },
      { rootMargin: "200px" },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [hasMore, isLoadingMore]);

  function handleSearchSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setAppliedFilters({
      search,
      emirate,
      community,
      status: fixedStatus ?? status,
      category,
      bedrooms,
      developer,
      minPrice: priceRange[0],
      maxPrice: priceRange[1],
    });
  }

  function clearField<K extends keyof PropertyFilterValues>(
    key: K,
    resetValue: PropertyFilterValues[K],
  ) {
    // Clear both draft (so the form reflects it) and applied (so results update immediately)
    switch (key) {
      case "search":
        setSearch(resetValue as string);
        break;
      case "emirate":
        setEmirate(resetValue as string);
        break;
      case "community":
        setCommunity(resetValue as string);
        break;
      case "status":
        setStatus(resetValue as string);
        break;
      case "category":
        setCategory(resetValue as string);
        break;
      case "bedrooms":
        setBedrooms(resetValue as string);
        break;
      case "developer":
        setDeveloper(resetValue as string);
        break;
    }
    setAppliedFilters((prev) => ({ ...prev, [key]: resetValue }));
  }

  function clearPriceRange() {
    setPriceRange([priceBounds.min, priceBounds.max]);
    setAppliedFilters((prev) => ({
      ...prev,
      minPrice: priceBounds.min,
      maxPrice: priceBounds.max,
    }));
  }

  function handleReset() {
    setSearch("");
    setEmirate("");
    setCommunity("");
    if (!fixedStatus) setStatus("");
    setCategory("");
    setBedrooms("");
    setDeveloper("");
    setPriceRange([priceBounds.min, priceBounds.max]);
    setSort("featured");
    setAppliedFilters({
      search: "",
      emirate: "",
      community: "",
      status: fixedStatus ?? "",
      category: "",
      bedrooms: "",
      developer: "",
      minPrice: priceBounds.min,
      maxPrice: priceBounds.max,
    });
  }

  const activeFilters = [
    appliedFilters.search && {
      key: "search",
      label: `"${appliedFilters.search}"`,
      clear: () => clearField("search", ""),
    },
    appliedFilters.emirate && {
      key: "emirate",
      label: getEmirateLabel(appliedFilters.emirate as Emirate),
      clear: () => clearField("emirate", ""),
    },
    appliedFilters.community && {
      key: "community",
      label: getCommunityLabel(appliedFilters.community),
      clear: () => clearField("community", ""),
    },
    !fixedStatus &&
      appliedFilters.status && {
        key: "status",
        label: getStatusLabel(appliedFilters.status as PropertyStatus),
        clear: () => clearField("status", ""),
      },
    appliedFilters.category && {
      key: "category",
      label: getCategoryLabel(appliedFilters.category as PropertyCategory),
      clear: () => clearField("category", ""),
    },
    appliedFilters.bedrooms && {
      key: "bedrooms",
      label:
        appliedFilters.bedrooms === "studio"
          ? "Studio"
          : appliedFilters.bedrooms === "4+"
            ? "4+ Beds"
            : `${appliedFilters.bedrooms} Bed${appliedFilters.bedrooms === "1" ? "" : "s"}`,
      clear: () => clearField("bedrooms", ""),
    },
    appliedFilters.developer && {
      key: "developer",
      label: getDeveloperLabel(appliedFilters.developer),
      clear: () => clearField("developer", ""),
    },
    (appliedFilters.minPrice !== priceBounds.min ||
      appliedFilters.maxPrice !== priceBounds.max) && {
      key: "price",
      label: `AED ${appliedFilters.minPrice.toLocaleString()} - ${appliedFilters.maxPrice.toLocaleString()}`,
      clear: clearPriceRange,
    },
  ].filter(Boolean) as { key: string; label: string; clear: () => void }[];

  const container = {
    hidden: {},
    visible: { transition: { staggerChildren: shouldReduceMotion ? 0 : 0.06 } },
  };
  const item = {
    hidden: { opacity: 0, y: shouldReduceMotion ? 0 : 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: EASE_SMOOTH },
    },
  };

  return (
    <Section id="filters">
      <form
        onSubmit={handleSearchSubmit}
        className="rounded-md border border-border bg-card p-5 max-w-5xl mx-auto sm:p-6"
      >
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <SearchInput
            value={search}
            onChange={setSearch}
            placeholder="Search by name, community, developer"
            className="sm:col-span-2 lg:col-span-4"
          />
          <SelectDropdown
            label="Emirate"
            value={emirate}
            options={emirateOptions}
            onChange={setEmirate}
            placeholder="All Emirates"
          />
          <SelectDropdown
            label="Community"
            value={community}
            options={communityOptions}
            onChange={setCommunity}
            placeholder={emirate ? "All Communities" : "Select emirate first"}
            disabled={!emirate}
          />
          {!fixedStatus && (
            <SelectDropdown
              label="Property Status"
              value={status}
              options={statusOptions}
              onChange={setStatus}
              placeholder="All Statuses"
            />
          )}
          <SelectDropdown
            label="Property Type"
            value={category}
            options={categoryOptions}
            onChange={setCategory}
            placeholder="All Types"
          />
          <SelectDropdown
            label="Bedrooms"
            value={bedrooms}
            options={BEDROOM_FILTER_OPTIONS}
            onChange={setBedrooms}
            placeholder="Any"
          />
          <SelectDropdown
            label="Developer"
            value={developer}
            options={developerOptions}
            onChange={setDeveloper}
            placeholder="All Developers"
          />

          <div className="flex flex-col justify-end gap-1.5 sm:col-span-2 lg:col-span-2">
            <span className="font-body text-caption font-medium uppercase tracking-wide text-text-secondary">
              Price Range
            </span>
            <RangeSlider
              min={priceBounds.min}
              max={priceBounds.max}
              step={10000}
              value={priceRange}
              onChange={setPriceRange}
            />
          </div>
        </div>

        <div className="mt-10 flex justify-end">
          <Button
            type="submit"
            variant="secondary"
            size="md"
            icon={SearchIcon}
            className="w-full  sm:w-auto"
          >
            Search Properties
          </Button>
        </div>

        {activeFilters.length > 0 && (
          <div className="mt-10 flex flex-wrap items-center gap-2 border-t border-border pt-4">
            {activeFilters.map((f) => (
              <FilterChip key={f.key} label={f.label} onRemove={f.clear} />
            ))}
            <button
              type="button"
              onClick={handleReset}
              className="ml-1 inline-flex items-center gap-1 font-body text-caption text-text-secondary transition-colors duration-300 hover:text-primary"
            >
              <RotateCcw size={12} /> Reset All
            </button>
          </div>
        )}
      </form>

      <div className="mt-20 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <p className="font-body text-body-sm text-text-secondary">
          <span className="font-heading text-h4 text-primary">
            {filtered.length}
          </span>{" "}
          Properties Found
        </p>

        <div className="flex items-center gap-3">
          <SelectDropdown
            value={sort}
            options={SORT_OPTIONS}
            onChange={(v) => setSort(v as PropertySort)}
            className="w-48"
          />
          <div className="flex items-center gap-1 rounded border border-border p-1">
            <button
              type="button"
              onClick={() => setView("grid")}
              aria-label="Grid view"
              aria-pressed={view === "grid"}
              className={cn(
                "rounded p-1.5 transition-colors duration-300",
                view === "grid"
                  ? "bg-primary text-primary-foreground"
                  : "text-text-secondary hover:text-primary",
              )}
            >
              <LayoutGrid size={16} />
            </button>
            <button
              type="button"
              onClick={() => setView("list")}
              aria-label="List view"
              aria-pressed={view === "list"}
              className={cn(
                "rounded p-1.5 transition-colors duration-300",
                view === "list"
                  ? "bg-primary text-primary-foreground"
                  : "text-text-secondary hover:text-primary",
              )}
            >
              <List size={16} />
            </button>
          </div>
        </div>
      </div>

      {filtered.length === 0 ? (
        <EmptyState
          icon={<NoPropertiesIcon />}
          title="No Properties Found"
          description="Try adjusting your filters or search terms to find more results."
        />
      ) : (
        <>
          <motion.div
            key={view}
            variants={container}
            initial="hidden"
            animate="visible"
            className={cn(
              "mt-14",
              view === "grid"
                ? "grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3"
                : "grid grid-cols-1 gap-4 lg:grid-cols-2",
            )}
          >
            {visibleProperties.map((property) =>
              view === "grid" ? (
                <motion.div key={property.id} variants={item} className="h-80">
                  <PropertyCard
                    property={property}
                    imageVariant="listing"
                    showFeaturedBadge
                    className="h-full"
                  />
                </motion.div>
              ) : (
                <motion.div key={property.id} variants={item}>
                  <PropertyListCard property={property} />
                </motion.div>
              ),
            )}
          </motion.div>

          {hasMore && (
            <div
              ref={sentinelRef}
              className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3"
            >
              {isLoadingMore &&
                Array.from({ length: 3 }).map((_, i) => (
                  <PropertyCardSkeleton key={i} className="h-80" />
                ))}
            </div>
          )}
        </>
      )}
    </Section>
  );
}
