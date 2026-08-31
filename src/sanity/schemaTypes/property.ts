import { defineField, defineType } from "sanity";

const STATUS_OPTIONS = [
  { title: "Off Plan", value: "off-plan" },
  { title: "Ready Properties", value: "completed" },
  { title: "Rental", value: "rental" },
];

const CATEGORY_OPTIONS = [
  { title: "Apartment", value: "apartment" },
  { title: "Villa", value: "villa" },
  { title: "Penthouse", value: "penthouse" },
  { title: "Townhouse", value: "townhouse" },
  { title: "Duplex", value: "duplex" },
];

const UNIT_TYPE_OPTIONS = [
  { title: "Studio", value: "studio" },
  { title: "1 Bedroom", value: "1-bedroom" },
  { title: "2 Bedroom", value: "2-bedroom" },
  { title: "3 Bedroom", value: "3-bedroom" },
  { title: "4 Bedroom", value: "4-bedroom" },
  { title: "Penthouse", value: "penthouse" },
];

export const property = defineType({
  name: "property",
  title: "Property",
  type: "document",
  groups: [
    { name: "basic", title: "Basic Information" },
    { name: "location", title: "Location" },
    { name: "details", title: "Property Details" },
    { name: "developerGroup", title: "Developer" },
    { name: "pricing", title: "Pricing" },
    { name: "media", title: "Media" },
  ],
  fields: [
    // BASIC INFORMATION
    defineField({
      name: "name",
      title: "Property Name",
      type: "string",
      group: "basic",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      group: "basic",
      description:
        "Auto-generated from the property name. This becomes part of the property's link.",
      options: { source: "name" },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "status",
      title: "Property Status",
      type: "string",
      group: "basic",
      options: { list: STATUS_OPTIONS, layout: "radio" },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "featured",
      title: "Featured Property",
      type: "boolean",
      group: "basic",
      description:
        "Turn this on to show this property in the Featured Properties section on the homepage.",
      initialValue: false,
    }),
    defineField({
      name: "displayOrder",
      title: "Display Order",
      type: "number",
      group: "basic",
      description:
        "Lower numbers appear first. Used for sorting on the homepage and listings.",
      initialValue: 1,
    }),

    // LOCATION
    defineField({
      name: "emirate",
      title: "Emirate",
      type: "reference",
      group: "location",
      to: [{ type: "emirate" }],
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "community",
      title: "Community",
      type: "reference",
      group: "location",
      to: [{ type: "community" }],
      description:
        "Only communities belonging to the selected Emirate will appear here.",
      options: {
        filter: ({ document }) => {
          const emirateRef = (document as { emirate?: { _ref?: string } })
            ?.emirate?._ref;
          if (!emirateRef) return { filter: "" };
          return {
            filter: "emirate._ref == $emirateRef",
            params: { emirateRef },
          };
        },
      },
      validation: (Rule) => Rule.required(),
    }),

    // PROPERTY DETAILS
    defineField({
      name: "category",
      title: "Property Type",
      type: "string",
      group: "details",
      options: { list: CATEGORY_OPTIONS },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "areaSqFt",
      title: "Area (Sq Ft)",
      type: "number",
      group: "details",
      validation: (Rule) => Rule.required().positive(),
    }),
    defineField({
      name: "availableUnits",
      title: "Available Units",
      type: "array",
      group: "details",
      description:
        "Add one entry per bedroom configuration available for this property.",
      of: [
        {
          type: "object",
          name: "unit",
          fields: [
            defineField({
              name: "type",
              title: "Unit Type",
              type: "string",
              options: { list: UNIT_TYPE_OPTIONS },
              validation: (Rule) => Rule.required(),
            }),
            defineField({
              name: "startingPrice",
              title: "Starting Price for This Unit (AED)",
              type: "number",
              description:
                "Optional — leave blank if the same as the property's overall starting price.",
            }),
          ],
          preview: {
            select: { title: "type", subtitle: "startingPrice" },
          },
        },
      ],
      validation: (Rule) =>
        Rule.min(1).error("Add at least one available unit."),
    }),

    // DEVELOPER
    defineField({
      name: "developer",
      title: "Developer",
      type: "reference",
      group: "developerGroup",
      to: [{ type: "developer" }],
      validation: (Rule) => Rule.required(),
    }),

    // PRICING
    defineField({
      name: "startingPrice",
      title: "Starting Price (AED)",
      type: "number",
      group: "pricing",
      description: "For Rental properties, enter the annual rent.",
      validation: (Rule) => Rule.required().positive(),
    }),

    // MEDIA
    defineField({
      name: "featuredImage",
      title: "Featured Image",
      type: "image",
      group: "media",
      description: "Used only in the homepage 'Featured Properties' section.",
      options: { hotspot: true },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "propertyImage",
      title: "Cover Image",
      type: "image",
      group: "media",
      description:
        "Used on all property listing cards (Properties, Off-Plan, Ready, Rental pages).",
      options: { hotspot: true },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "brochure",
      title: "Brochure (PDF)",
      type: "file",
      group: "media",
      description:
        "Optional. If left empty, visitors requesting the brochure will see a 'we'll email it to you' message instead of a download.",
      options: { accept: "application/pdf" },
    }),
  ],
  preview: {
    select: {
      title: "name",
      status: "status",
      emirate: "emirate.name",
      community: "community.name",
      developer: "developer.name",
      price: "startingPrice",
      featured: "featured",
      media: "propertyImage",
    },
    prepare({
      title,
      status,
      emirate,
      community,
      developer,
      price,
      featured,
      media,
    }) {
      const statusLabel =
        STATUS_OPTIONS.find((s) => s.value === status)?.title ?? status;
      const priceLabel =
        typeof price === "number" ? `AED ${price.toLocaleString()}` : "";
      return {
        title: `${featured ? "★ " : ""}${title}`,
        subtitle: [statusLabel, community, emirate, developer, priceLabel]
          .filter(Boolean)
          .join(" · "),
        media,
      };
    },
  },
});
