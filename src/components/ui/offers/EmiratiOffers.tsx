"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";

type EmiratiWomenOfferProps = {
  propertyImage: string;
  backgroundArtwork: string;
  campaignLogo: string;
  eyebrow?: string;
  title?: string;
  description?: string;
  dateText?: string;
  enquiryHref?: string;
  whatsappHref?: string;
  className?: string;
};

export function EmiratiOffers({
  propertyImage,
  backgroundArtwork,
  campaignLogo,
  eyebrow = "EMIRATI WOMEN’S DAY EXCLUSIVE",
  title = "Exclusive Binghatti Property Offers for Emirati Women",
  description = "Celebrate Emirati Women with exclusive property opportunities from Binghatti, available specially for female Emirati nationals for a limited time.",
  dateText = "FROM 1 SEPTEMBER TO 7 SEPTEMBER 2026",
  enquiryHref = "/enquiry",
  whatsappHref = "https://wa.me/971545813201?text=Hi%20AFAQ%20Al%20Manzil%20Properties,%20I%20have%20an%20enquiry.",
  className = "",
}: EmiratiWomenOfferProps) {
  const reduceMotion = useReducedMotion();

  const fadeUp = {
    hidden: {
      opacity: 0,
      y: reduceMotion ? 0 : 24,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: reduceMotion ? 0 : 0.7,
        ease: [0.22, 1, 0.36, 1] as const,
      },
    },
  };

  return (
    <section
      aria-label="Emirati Women’s Day property offer"
      className={`relative overflow-hidden  bg-[#000614] py-16 sm:py-20 lg:py-24 ${className}`}
    >
      {/* Page decorative borders */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-y-0 left-5 hidden w-px bg-[#0F1D3D] md:block lg:left-10"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-y-0 right-5 hidden w-px bg-[#0F1D3D] md:block lg:right-10"
      />

      <div className="relative mx-auto w-full max-w-[1280px] px-4 sm:px-6 lg:px-0">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{
            once: true,
            amount: 0.2,
          }}
          variants={{
            hidden: {},
            visible: {
              transition: {
                staggerChildren: reduceMotion ? 0 : 0.1,
              },
            },
          }}
          className="
            relative
            min-h-[600px]
            max-w-7xl
            overflow-hidden
            rounded-[28px]
            border
            border-[#0F1D3D]
            bg-[#050D24]
            sm:min-h-[650px]
            lg:min-h-[519px]
            lg:rounded-[40px]
          "
        >
          {/* =====================================================
              BLUE ILLUSTRATOR BACKGROUND
          ====================================================== */}
          <div className="pointer-events-none absolute inset-0 z-0">
            <Image
              src={backgroundArtwork}
              alt=""
              fill
              priority={false}
              className="object-cover object-left"
              sizes="(max-width: 1024px) 100vw, 1280px"
            />

            {/* Extra darkness behind text */}
            <div
              className="
                absolute inset-0
                bg-gradient-to-r
                from-[#050B29]/20
                via-[#050B29]/5
                to-transparent
                lg:from-transparent
              "
            />
          </div>

          {/* =====================================================
              RIGHT PROPERTY IMAGE
          ====================================================== */}
          <motion.div
            aria-hidden="true"
            initial={
              reduceMotion
                ? { opacity: 1 }
                : {
                    opacity: 0,
                    scale: 1.05,
                    x: 35,
                  }
            }
            whileInView={{
              opacity: 1,
              scale: 1,
              x: 0,
            }}
            viewport={{
              once: true,
              amount: 0.25,
            }}
            transition={{
              duration: 1.1,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="
              absolute
              z-10

              bottom-[-160px]
              left-1/2
              h-[430px]
              w-[430px]
              -translate-x-1/2

              sm:bottom-[-190px]
              sm:h-[520px]
              sm:w-[520px]

              lg:-bottom-[236px]
              lg:left-[49%]
              lg:h-[992px]
              lg:w-[992px]
              lg:-translate-x-1/2
            "
          >
            {/* Gold outline */}
            <div
              className="
                absolute inset-0
                overflow-hidden
                rounded-full
                border-[3px]
                border-[#EBB811]

                lg:border-[4px]
              "
            >
              <Image
                src={propertyImage}
                alt="Binghatti property development in Dubai"
                fill
                className="object-contain"
                sizes="
                  (max-width: 640px) 430px,
                  (max-width: 1024px) 520px,
                  992px
                "
              />

              {/* subtle premium treatment */}
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#000614]/25 via-transparent to-transparent" />
            </div>

            {/* Gold atmospheric glow */}
            <div
              aria-hidden="true"
              className="
                absolute inset-[8%]
                -z-10
                rounded-full
                bg-[#EBB811]/10
                blur-[80px]
              "
            />
          </motion.div>

          {/* =====================================================
              CONTENT
          ====================================================== */}
          <div
            className="
              relative z-30
              flex
              min-h-[600px]
              flex-col
              justify-start
              px-6
              pb-[290px]
              pt-10

              sm:min-h-[650px]
              sm:px-10
              sm:pb-[330px]
              sm:pt-12

              lg:min-h-[519px]
              lg:w-[58%]
              lg:justify-center
              lg:px-16
              lg:pb-0
              lg:pt-0
            "
          >
            {/* Eyebrow */}
            <motion.div variants={fadeUp}>
              <div
                className="
                  inline-flex
                  items-center
                  gap-1.5
                  rounded-full
                  border
                  border-[#C7A35D]/40
                  bg-[#EBB811]/10
                  px-3
                  py-2
                  backdrop-blur-[5px]
                "
              >
                <Sparkles
                  aria-hidden="true"
                  className="h-3 w-3 text-[#EBB811]"
                  strokeWidth={1.8}
                />

                <span
                  className="
                    text-[9px]
                    font-medium
                    tracking-[0.1em]
                    text-white
                    sm:text-[10px]
                    lg:text-[12px]
                  "
                >
                  {eyebrow}
                </span>
              </div>
            </motion.div>

            {/* Heading */}
            <motion.h2
              variants={fadeUp}
              className="
                mt-[18px]
                max-w-[660px]
                font-serif
                text-[30px]
                font-semibold
                leading-[1.18]
                text-white

                sm:text-[38px]
                lg:text-[34px]
              "
            >
              Exclusive{" "}
              <span className="text-[#EBB811]">Binghatti Property</span> Offers
              for <span className="text-[#EBB811]">Emirati Women</span>
            </motion.h2>

            {/* Description */}
            <motion.p
              variants={fadeUp}
              className="
                mt-4
                max-w-[650px]
                text-[14px]
                font-medium
                leading-6
                text-[#E6ECF3]

                sm:text-[16px]
                lg:text-[18px]
              "
            >
              {description}
            </motion.p>

            {/* Date badge */}
            <motion.div
              variants={fadeUp}
              className="
                mt-[18px]
                flex
                w-fit
                max-w-full
                items-center
                gap-2
                rounded-full
                border
                border-[#0F1D3D]
                bg-[#050D24]/90
                px-3
                py-2
                backdrop-blur-[5px]
              "
            >
              <span
                aria-hidden="true"
                className="h-1.5 w-1.5 shrink-0 rounded-full bg-[#EBB811]"
              />

              <p
                className="
                  text-[9px]
                  font-medium
                  uppercase
                  tracking-[0.08em]
                  text-white

                  sm:text-[10px]
                  lg:text-[12px]
                "
              >
                LIMITED TIME ONLY{" "}
                <span className="font-semibold text-[#EBB811]">{dateText}</span>
              </p>
            </motion.div>

            {/* CTA buttons */}
            <motion.div
              variants={fadeUp}
              className="
                mt-6
                flex
                flex-col
                gap-3
                xs:flex-row
                sm:flex-row
              "
            >
              {/* Enquiry */}
              <Link
                href={enquiryHref}
                className="
                  group
                  relative
                  inline-flex
                  min-h-[44px]
                  items-center
                  justify-center
                  gap-2
                  overflow-hidden
                  rounded-lg
                  px-7
                  py-2.5
                  text-sm
                  font-semibold
                  text-[#000614]

                  focus-visible:outline-none
                  focus-visible:ring-2
                  focus-visible:ring-[#EBB811]
                  focus-visible:ring-offset-2
                  focus-visible:ring-offset-[#000614]
                "
              >
                {/* Gold gradient */}
                <span
                  aria-hidden="true"
                  className="
                    absolute inset-0
                    bg-gradient-to-br
                    from-[#EBCF3A]
                    via-[#EBC33A]
                    to-[#EB8E25]
                    transition-transform
                    duration-500
                    group-hover:scale-110
                  "
                />

                {/* Shine animation */}
                <span
                  aria-hidden="true"
                  className="
                    absolute
                    -left-[120%]
                    top-0
                    h-full
                    w-[55%]
                    skew-x-[-22deg]
                    bg-white/30
                    transition-all
                    duration-700
                    group-hover:left-[140%]
                  "
                />

                <span className="relative z-10">Enquiry Now</span>

                <ArrowRight
                  aria-hidden="true"
                  className="
                    relative z-10
                    h-4 w-4
                    transition-transform
                    duration-300
                    group-hover:translate-x-1
                  "
                />
              </Link>

              {/* WhatsApp */}
              <a
                href={whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                className="
                  group
                  inline-flex
                  min-h-[44px]
                  items-center
                  justify-center
                  rounded-lg
                  border
                  border-[#0F1D3D]
                  bg-gradient-to-br
                  from-[#050D24]
                  to-[#000614]
                  px-7
                  py-2.5
                  text-sm
                  font-semibold
                  text-white
                  transition-all
                  duration-300

                  hover:border-[#EBB811]/60
                  hover:text-[#EBB811]

                  focus-visible:outline-none
                  focus-visible:ring-2
                  focus-visible:ring-[#EBB811]
                  focus-visible:ring-offset-2
                  focus-visible:ring-offset-[#000614]
                "
              >
                WhatsApp Us
              </a>
            </motion.div>
          </div>

          {/* =====================================================
              EMIRATI WOMEN'S DAY ROUND BADGE
          ====================================================== */}
          <motion.div
            initial={
              reduceMotion
                ? { opacity: 1 }
                : {
                    opacity: 0,
                    scale: 0.75,
                    rotate: -8,
                  }
            }
            whileInView={{
              opacity: 1,
              scale: 1,
              rotate: 0,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              delay: reduceMotion ? 0 : 0.55,
              duration: reduceMotion ? 0 : 0.7,
              type: "spring",
              stiffness: 120,
              damping: 14,
            }}
            className="
              absolute
              z-40
              hidden
              items-center
              justify-center
              rounded-full
              border
              border-[#0F1D3D]
              bg-[#081120]
              shadow-[0_15px_60px_rgba(0,0,0,0.45)]

              lg:left-[50.5%]
              lg:top-[92px]
              lg:flex
              lg:h-[179px]
              lg:w-[179px]
            "
          >
            {/* Very subtle attention pulse */}
            {!reduceMotion && (
              <motion.span
                aria-hidden="true"
                animate={{
                  scale: [1, 1.09, 1],
                  opacity: [0.25, 0, 0.25],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  repeatDelay: 4,
                  ease: "easeOut",
                }}
                className="
                  absolute inset-0
                  rounded-full
                  border
                  border-[#EBB811]
                "
              />
            )}

            <div className="flex flex-col items-center justify-center px-3 text-center">
              <div className="relative h-[72px] w-[86px]">
                <Image
                  src={campaignLogo}
                  alt="Emirati Women's Day"
                  fill
                  className="object-contain"
                  sizes="86px"
                />
              </div>

              <p className="mt-1 max-w-[148px] text-[15px] font-medium leading-5 text-white">
                This is Your Time to{" "}
                <span className="text-[#EBB811]">One More</span>
              </p>
            </div>
          </motion.div>

          {/* Mobile campaign badge */}
          <motion.div
            variants={fadeUp}
            className="
              absolute
              bottom-[195px]
              right-5
              z-40
              flex
              h-[112px]
              w-[112px]
              items-center
              justify-center
              rounded-full
              border
              border-[#EBB811]/40
              bg-[#081120]
              shadow-xl

              sm:bottom-[235px]
              sm:right-10
              sm:h-[130px]
              sm:w-[130px]

              lg:hidden
            "
          >
            <div className="flex flex-col items-center text-center">
              <div className="relative h-11 w-14 sm:h-12 sm:w-16">
                <Image
                  src={campaignLogo}
                  alt="Emirati Women's Day"
                  fill
                  className="object-contain"
                />
              </div>

              <p className="mt-1 px-3 text-[9px] leading-3 text-white sm:text-[10px]">
                Your Time to <span className="text-[#EBB811]">One More</span>
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
