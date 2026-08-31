import { useEffect, useRef, useState } from 'react'
import {
  Leaf,
  PawPrint,
  Rabbit,
  Recycle,
  MapPin,
  Sprout,
  FlaskConical,
  Droplets,
  Package,
  Check,
  Plus,
  Minus,
  ArrowRight,
  ArrowUpRight,
  Star,
  Truck,
  BadgePercent,
  ShieldCheck,
  Menu,
  X,
} from 'lucide-react'

const SHOP = 'https://www.thebloomgreen.com'

/* ---------------------------------------------------------------- data */

const CATEGORIES = [
  {
    name: 'Room Sprays',
    tag: 'From ₹199',
    desc: 'One spritz of real flowers for bedrooms & workspaces.',
    img: '/img/cat-room.jpg',
  },
  {
    name: 'Car Fresheners',
    tag: 'Gels & sprays',
    desc: 'Dashboard gels and sprays that outlast every commute.',
    img: '/img/cat-car.jpg',
  },
  {
    name: 'Scented Candles',
    tag: '16+ hr burn',
    desc: 'Organic soy-wax candles with wooden lids and a clean burn.',
    img: '/img/cat-candle.jpg',
  },
  {
    name: 'Camphor Cones',
    tag: 'Prayer-room ready',
    desc: 'Natural camphor pouches for wardrobes & quiet corners.',
    img: '/img/cat-cone.jpg',
  },
]

const BESTSELLERS = [
  {
    name: 'Jade Breeze Air Freshener 100ml',
    offer: 'Buy 1 Get 1 Free',
    scent: 'Green woods · sandal calm',
    dots: ['#c9b08a', '#8a9a7b'],
    price: 299,
    img: '/img/prod-jade.jpg',
    href: `${SHOP}/products/buy-jade-breeze-air-freshener-100ml-get-1-free-bloom-green-buy-1-get-1-offer`,
  },
  {
    name: 'Temple Essence + Jade Breeze Combo',
    offer: 'Combo Offer',
    scent: 'Sacred florals · two full bottles',
    dots: ['#c98f2c', '#c9b08a'],
    price: 599,
    img: '/img/prod-temple.jpg',
    href: `${SHOP}/products/buy-temple-essence-air-freshener-100ml-get-jade-breeze-air-freshener-100ml-free-bloom-green-combo-offer`,
  },
  {
    name: 'Divine Jasmine Spray 100ml',
    offer: null,
    scent: 'Fresh mogra · floral morning',
    dots: ['#dfe3ef', '#f2f0e4'],
    price: 199,
    img: '/img/prod-jasmine.jpg',
    href: `${SHOP}/products/divine-jasmine-natural-air-freshener-spray-refreshing-floral-aroma-100ml`,
  },
  {
    name: 'Orange Bliss Spray 100ml',
    offer: null,
    scent: 'Juicy citrus · instant lift',
    dots: ['#e8963f', '#f5c98a'],
    price: 199,
    img: '/img/prod-orange.jpg',
    href: `${SHOP}/products/orange-bliss-natural-air-freshener-spray-citrusy-fresh-room-fragrance-100ml`,
  },
]

const STEPS = [
  {
    n: '01',
    icon: Sprout,
    title: 'Real botanicals, picked fresh',
    text: 'Flowers, herbs and even vegetables — cucumber, beet, carrot — sourced fresh, never as synthetic “fragrance oil”.',
  },
  {
    n: '02',
    icon: FlaskConical,
    title: 'Steam-distilled in Kannauj',
    text: 'Family artisans in India’s perfume capital extract the aroma in traditional clay-and-copper stills, the same way for generations.',
  },
  {
    n: '03',
    icon: Droplets,
    title: 'Blended with essential oils',
    text: 'Pure extracts are balanced with essential oils and natural preservatives for a scent that lasts — nothing gas-based, ever.',
  },
  {
    n: '04',
    icon: Package,
    title: 'Bottled for your home',
    text: 'Every bottle is safe around kids, pets and sensitive noses. Fine mist, no propellants, no headache.',
  },
]

const FEATURED_REVIEW = {
  name: 'Palak Chopra',
  place: 'Ghaziabad',
  avatar: '/img/av-palak.jpg',
  uses: 'Room sprays — Lavender & Citrus',
  text: 'It’s not just an air freshener; it’s an experience. The natural plant-based scents brighten up my rooms without any fake fragrance. I can even use it around my baby and pets without worrying.',
}

const REVIEWS = [
  {
    name: 'Divya Rana',
    place: 'Chandigarh',
    avatar: '/img/av-divya.jpg',
    uses: 'Mogra room spray',
    text: 'Finally an air freshener that’s as clean as it smells. Knowing it’s plant-based and toxin-free is so reassuring with kids around.',
  },
  {
    name: 'Venkatesh',
    place: 'Hyderabad',
    avatar: '/img/av-venkatesh.jpg',
    uses: 'Room sprays',
    text: 'Every scent feels natural and well-balanced, never overwhelming. It’s like aromatherapy in a bottle.',
  },
  {
    name: 'Sainy Garg',
    place: 'Raipur',
    avatar: '/img/av-sainy.jpg',
    uses: 'Home fresheners',
    text: 'The fresh scent in my rooms comes from real plants, not chemicals. Gentle, calming and unique — like stepping into a garden.',
  },
  {
    name: 'Manish Lanjewar',
    place: 'Nagpur',
    avatar: '/img/av-manish.jpg',
    uses: 'Car freshener — Citrus',
    text: 'Like no other car freshener — fresh, light, and it actually makes the air feel cleaner. I love that it’s safe for pets too.',
  },
]

const FAQS = [
  {
    q: 'What makes Bloom Green different from regular air fresheners?',
    a: 'Most sprays are synthetic perfume in a gas propellant. Ours are steam-distilled from real flowers, herbs and vegetables in Kannauj — India’s historic perfume town — then blended with essential oils. No harsh gas-based chemicals at all.',
  },
  {
    q: 'Is it really safe for kids and pets?',
    a: 'Yes. Every formula is plant-based, free from gas-based chemicals, and gentle on sensitive noses — so it won’t irritate children, dogs or cats sharing the room.',
  },
  {
    q: 'How long does the fragrance last?',
    a: 'Room sprays leave a natural, lingering freshness for hours rather than an artificial blast. Our soy-wax candles burn for 16+ hours, and camphor cones keep working for weeks.',
  },
  {
    q: 'Are the products vegan and cruelty-free?',
    a: 'Completely. Plant-powered ingredients, no animal testing, and eco-friendly packaging that supports local farmers.',
  },
  {
    q: 'What about shipping and offers?',
    a: 'Shipping is free on orders over ₹999, and first-time buyers get 10% off with code WELCOME10 at checkout.',
  },
]

const TICKER = [
  'Steam-distilled in Kannauj',
  '100% plant-based',
  'Safe for kids & pets',
  'No gas propellants',
  'Cruelty-free',
  'Supports local farmers',
]

/* ------------------------------------------------------------ shared */

/* Scroll-triggered reveal: fades content in as it enters the viewport. */
function Reveal({ delay = 0, className = '', children }) {
  const ref = useRef(null)
  useEffect(() => {
    const el = ref.current
    if (!el) return
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add('in')
          io.disconnect()
        }
      },
      { threshold: 0.12, rootMargin: '0px 0px -36px 0px' },
    )
    io.observe(el)
    return () => io.disconnect()
  }, [])
  return (
    <div ref={ref} data-reveal style={{ transitionDelay: `${delay}ms` }} className={className}>
      {children}
    </div>
  )
}

function Logo({ dark = false }) {
  return (
    <span
      className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-white shadow-sm ${
        dark ? 'ring-1 ring-sand-100/25' : 'ring-1 ring-ink-900/15'
      }`}
    >
      <img src="/img/logo-mark.png" alt="Bloom Green logo" className="h-[30px] w-[30px] object-contain" />
    </span>
  )
}

function Eyebrow({ children, light = false }) {
  return (
    <p
      className={`flex items-center gap-3 text-[11px] font-semibold uppercase tracking-[0.28em] ${
        light ? 'text-gold-400' : 'text-terra-600'
      }`}
    >
      <span className={`h-px w-8 ${light ? 'bg-gold-400' : 'bg-terra-600'}`} />
      {children}
    </p>
  )
}

/* ------------------------------------------------------------ sections */

function AnnouncementBar() {
  return (
    <div className="bg-ink-900 text-sand-100 text-center text-xs tracking-widest uppercase py-2.5 px-4">
      Free shipping over ₹999 — 10% off first order with code{' '}
      <span className="text-gold-400 font-bold">WELCOME10</span>
    </div>
  )
}

function Nav() {
  const [open, setOpen] = useState(false)
  const links = [
    ['Shop', '#bestsellers'],
    ['Categories', '#categories'],
    ['Our Craft', '#craft'],
    ['Reviews', '#reviews'],
    ['FAQ', '#faq'],
  ]
  return (
    <header className="sticky top-0 z-50 bg-sand-100/90 backdrop-blur-md border-b border-ink-900/10">
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 flex items-center justify-between h-[72px]">
        <a href="#top" className="flex items-center gap-3">
          <Logo />
          <span className="font-display text-[22px] font-semibold tracking-tight">
            Bloom<span className="italic text-terra-600">Green</span>
          </span>
        </a>
        <div className="hidden md:flex items-center gap-9">
          {links.map(([label, href]) => (
            <a
              key={label}
              href={href}
              className="text-[13px] font-medium uppercase tracking-[0.14em] text-ink-800 hover:text-terra-600 transition-colors"
            >
              {label}
            </a>
          ))}
        </div>
        <div className="flex items-center gap-3">
          <a
            href={`${SHOP}/collections/all`}
            className="hidden sm:inline-flex items-center gap-2 border border-ink-900 px-5 py-2.5 text-[13px] font-semibold uppercase tracking-[0.14em] text-ink-900 hover:bg-ink-900 hover:text-sand-100 transition-colors"
          >
            Shop now <ArrowUpRight size={15} strokeWidth={2.2} />
          </a>
          <button className="md:hidden p-2" onClick={() => setOpen(!open)} aria-label="Menu">
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </nav>
      {open && (
        <div className="md:hidden border-t border-ink-900/10 bg-sand-100 px-6 py-4 flex flex-col gap-3">
          {links.map(([label, href]) => (
            <a
              key={label}
              href={href}
              onClick={() => setOpen(false)}
              className="py-1 text-sm font-medium uppercase tracking-[0.14em] text-ink-800"
            >
              {label}
            </a>
          ))}
        </div>
      )}
    </header>
  )
}

function TrustMicroBadges({ className = '', delay = 520 }) {
  return (
    <ul
      className={`fade-up flex flex-wrap items-center gap-x-5 gap-y-2 ${className}`}
      style={{ animationDelay: `${delay}ms` }}
    >
      {[
        [Leaf, '100% plant-based'],
        [PawPrint, 'Kid & pet safe'],
        [MapPin, 'Made in Kannauj'],
      ].map(([Icon, label]) => (
        <li key={label} className="flex items-center gap-1.5 text-[12px] font-semibold text-ink-800/85">
          <Icon size={14} strokeWidth={2} className="text-olive-600" />
          {label}
        </li>
      ))}
    </ul>
  )
}

function HeroCtas({ delay = 400 }) {
  return (
    <div
      className="fade-up flex flex-wrap items-center gap-x-4 gap-y-3"
      style={{ animationDelay: `${delay}ms` }}
    >
      <a
        href="#bestsellers"
        className="inline-flex items-center justify-center gap-2.5 bg-ink-900 px-6 lg:px-7 py-4 text-[13px] font-semibold uppercase tracking-[0.16em] text-sand-100 hover:bg-terra-600 transition-colors"
      >
        Shop bestsellers <ArrowRight size={16} strokeWidth={2.2} />
      </a>
      <a
        href="#craft"
        className="inline-flex items-center gap-2 px-2 py-4 text-[13px] font-semibold uppercase tracking-[0.16em] text-ink-900 border-b-2 border-terra-600 hover:text-terra-600 transition-colors"
      >
        How it’s made
      </a>
    </div>
  )
}

function Hero() {
  return (
    <section id="top" className="relative bg-sand-100 overflow-hidden">
      <div className="relative flex flex-col items-center px-4 sm:px-6">
        {/* decorative botanicals */}
        <img
          src="/img/branch.png"
          alt=""
          aria-hidden
          className="pointer-events-none select-none absolute -top-10 -right-12 z-20 w-44 sm:w-60 xl:w-80 rotate-[115deg] fade-up"
          style={{ animationDelay: '450ms' }}
        />
        <img
          src="/img/branch.png"
          alt=""
          aria-hidden
          className="pointer-events-none select-none absolute -top-12 -left-14 z-0 w-40 sm:w-56 xl:w-72 -scale-x-100 rotate-[115deg] opacity-40"
        />
        {/* giant wordmark — sits BEHIND the product */}
        <h1 className="fade-up relative z-0 w-full pt-6 lg:pt-12 text-center font-display font-medium tracking-[-0.02em] leading-[0.85] text-ink-900 whitespace-nowrap text-[17vw] xl:text-[11rem] select-none">
          Bloom <span className="italic text-terra-600">Green</span>
        </h1>
        {/* bottle flanked by side notes */}
        <div className="relative z-10 -mt-[8vw] xl:-mt-24 w-full max-w-5xl grid grid-cols-[1fr_auto_1fr] items-center gap-3 sm:gap-8">
          <div className="fade-up justify-self-end text-right" style={{ animationDelay: '380ms' }}>
            <p className="text-[10px] sm:text-[11px] font-semibold uppercase tracking-[0.22em] text-ink-800/60">
              Est. Kannauj
            </p>
            <p className="mt-1 font-display italic text-[15px] sm:text-xl text-olive-700 leading-snug">
              the perfume <br className="sm:hidden" /> capital of India
            </p>
            <span className="mt-3 inline-block h-px w-10 sm:w-16 bg-terra-600/50" />
          </div>
          <div className="relative">
            <img
              src="/img/bottle-cutout.png"
              alt="Bloom Green Jade Breeze natural air freshener bottle"
              className="fade-up h-[350px] min-[400px]:h-[400px] sm:h-[460px] xl:h-[540px] w-auto drop-shadow-[0_28px_36px_rgba(41,32,24,0.28)]"
              style={{ animationDelay: '180ms' }}
            />
            <img
              src="/img/jasmine.png"
              alt=""
              aria-hidden
              className="pointer-events-none select-none absolute -bottom-4 -left-20 sm:-left-28 z-20 w-24 sm:w-32 xl:w-40 -rotate-6 fade-up"
              style={{ animationDelay: '520ms' }}
            />
          </div>
          <div className="fade-up justify-self-start" style={{ animationDelay: '380ms' }}>
            <span className="mb-3 inline-block h-px w-10 sm:w-16 bg-terra-600/50" />
            <p className="text-[10px] sm:text-[11px] font-semibold uppercase tracking-[0.22em] text-ink-800/60">
              100% plant-based
            </p>
            <p className="mt-1 font-display italic text-[15px] sm:text-xl text-terra-600 leading-snug">
              never gas, <br className="sm:hidden" /> never synthetic
            </p>
          </div>
        </div>
        <div className="-mt-1.5 h-4 w-44 rounded-[100%] bg-ink-900/15 blur-md" aria-hidden />

        <p
          className="fade-up mt-7 max-w-md text-center text-base lg:text-[17px] leading-relaxed text-ink-800/85"
          style={{ animationDelay: '320ms' }}
        >
          Sprays, candles and camphor cones steam-distilled from real flowers, herbs and vegetables
          — never synthetic perfume, never gas.
        </p>
        <div className="mt-7 flex justify-center">
          <HeroCtas />
        </div>
        <div className="mt-5 flex justify-center pb-10">
          <TrustMicroBadges className="justify-center" />
        </div>
      </div>
      {/* editorial ticker */}
      <div className="bg-terra-600 text-sand-50 overflow-hidden py-3 whitespace-nowrap">
        <div className="ticker inline-flex gap-0">
          {[0, 1].map((k) => (
            <div key={k} className="inline-flex shrink-0">
              {TICKER.map((t) => (
                <span
                  key={t + k}
                  className="inline-flex items-center gap-6 px-6 text-[12px] font-semibold uppercase tracking-[0.24em]"
                >
                  {t} <Leaf size={13} className="text-gold-400" />
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function MosaicStrip() {
  const tiles = [
    ['/img/prod-jade.jpg', 'Bestsellers', '#bestsellers'],
    ['/img/cat-room.jpg', 'Room sprays', `${SHOP}/collections/all`],
    ['/img/cat-car.jpg', 'Car range', `${SHOP}/collections/all`],
    ['/img/cat-candle.jpg', 'Candles', `${SHOP}/collections/all`],
    ['/img/cat-cone.jpg', 'Camphor cones', `${SHOP}/collections/all`],
    ['/img/story-kannauj.jpg', 'Our craft', '#craft'],
  ]
  return (
    <div className="border-b border-ink-900/10 bg-sand-100">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 py-5 flex gap-3.5 overflow-x-auto lg:grid lg:grid-cols-6 lg:gap-4 lg:overflow-visible">
        {tiles.map(([img, label, href]) => (
          <a key={label} href={href} className="group w-[88px] shrink-0 lg:w-auto">
            <div className="overflow-hidden">
              <img
                src={img}
                alt={label}
                className="aspect-square w-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>
            <p className="mt-2 text-center text-[10px] font-semibold uppercase tracking-[0.14em] text-ink-800/70 group-hover:text-terra-600 transition-colors whitespace-nowrap">
              {label}
            </p>
          </a>
        ))}
      </div>
    </div>
  )
}

function TrustBar() {
  const items = [
    [Leaf, '100% plant-based'],
    [PawPrint, 'Kid & pet safe'],
    [Rabbit, 'Cruelty-free'],
    [Recycle, 'Eco-friendly'],
    [MapPin, 'Made in Kannauj'],
  ]
  return (
    <div className="hidden lg:block border-b border-ink-900/10 bg-sand-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 py-6 lg:py-7 flex flex-wrap justify-center gap-2 lg:grid lg:grid-cols-5 lg:gap-x-6">
        {items.map(([Icon, label]) => (
          <div
            key={label}
            className="flex items-center gap-2 rounded-full border border-olive-500/30 bg-sand-100 px-3.5 py-2 lg:justify-center lg:gap-3 lg:rounded-none lg:border-0 lg:bg-transparent lg:px-0 lg:py-0"
          >
            <span className="text-olive-600 lg:flex lg:h-10 lg:w-10 lg:items-center lg:justify-center lg:rounded-full lg:border lg:border-olive-500/40">
              <Icon size={16} strokeWidth={1.7} className="lg:hidden" />
              <Icon size={18} strokeWidth={1.6} className="hidden lg:block" />
            </span>
            <span className="text-[12px] lg:text-[13px] font-medium text-ink-800 whitespace-nowrap">{label}</span>
          </div>
        ))}
      </div>
    </div>
  )
}

function Categories() {
  return (
    <section id="categories" className="relative bg-sand-100 overflow-hidden">
      <span className="ghost-word absolute -top-8 right-0 text-[26vw] hidden lg:block">bloom</span>
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 py-20 lg:py-28">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div className="max-w-xl">
            <Eyebrow>Shop by category</Eyebrow>
            <h2 className="mt-4 font-display text-4xl sm:text-5xl font-medium tracking-tight">
              Every space, <span className="italic text-olive-600">one honest scent</span>
            </h2>
          </div>
          <p className="max-w-xs text-sm leading-relaxed text-ink-800/70">
            Four simple product families — all plant-based, chemical-free and crafted by hand in
            Kannauj.
          </p>
        </div>
        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-px bg-ink-900/10 border border-ink-900/10">
          {CATEGORIES.map((c, i) => (
            <Reveal key={c.name} delay={i * 90} className="h-full">
            <a
              href={`${SHOP}/collections/all`}
              className="group relative block h-full bg-sand-50 p-4 pb-6 hover:bg-sand-50/60 transition-colors"
            >
              <div className="overflow-hidden">
                <img
                  src={c.img}
                  alt={c.name}
                  className="aspect-[4/5] w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <div className="mt-5 flex items-start justify-between gap-3">
                <div>
                  <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-terra-600">
                    {String(i + 1).padStart(2, '0')} — {c.tag}
                  </p>
                  <h3 className="mt-1.5 font-display text-[26px] font-medium leading-tight">
                    {c.name}
                  </h3>
                  <p className="mt-1.5 text-[13px] leading-snug text-ink-800/70">{c.desc}</p>
                </div>
                <span className="mt-1 flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-ink-900/25 text-ink-900 transition-all group-hover:bg-terra-600 group-hover:border-terra-600 group-hover:text-sand-50">
                  <ArrowUpRight size={16} strokeWidth={2} />
                </span>
              </div>
            </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

function Bestsellers() {
  return (
    <section id="bestsellers" className="bg-sand-200/70 border-y border-ink-900/10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 py-20 lg:py-28">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div className="max-w-xl">
            <Eyebrow>Bestsellers</Eyebrow>
            <h2 className="mt-4 font-display text-4xl sm:text-5xl font-medium tracking-tight">
              Loved in <span className="italic text-terra-600">10,000+</span> homes
            </h2>
          </div>
          <a
            href={`${SHOP}/collections/all`}
            className="inline-flex items-center gap-2 border-b-2 border-ink-900 pb-1 text-[13px] font-semibold uppercase tracking-[0.16em] hover:text-terra-600 hover:border-terra-600 transition-colors"
          >
            View all products <ArrowRight size={15} />
          </a>
        </div>
        {/* trust strip at the buying moment */}
        <ul className="mt-9 flex flex-wrap items-center gap-x-7 gap-y-2.5 border-y border-ink-900/10 py-3.5">
          {[
            [ShieldCheck, 'No gas propellants'],
            [PawPrint, 'Safe around pets'],
            [Truck, 'Free shipping over ₹999'],
            [BadgePercent, '10% off first order'],
          ].map(([Icon, label]) => (
            <li
              key={label}
              className="flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.14em] text-ink-800/75"
            >
              <Icon size={15} strokeWidth={1.8} className="text-olive-600" />
              {label}
            </li>
          ))}
        </ul>
        <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {BESTSELLERS.map((p, i) => (
            <Reveal key={p.name} delay={i * 90}>
            <a href={p.href} className="group flex h-full flex-col bg-sand-50 border border-ink-900/10 hover:border-ink-900/30 hover:shadow-[8px_8px_0_0_rgba(41,32,24,0.12)] transition-all duration-300">
              <div className="relative overflow-hidden">
                <img
                  src={p.img}
                  alt={p.name}
                  className="aspect-[4/5] w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                {p.offer && (
                  <span className="absolute top-3 left-3 inline-flex items-center gap-1.5 bg-terra-600 text-sand-50 text-[11px] font-bold uppercase tracking-[0.12em] px-3 py-1.5">
                    <BadgePercent size={13} /> {p.offer}
                  </span>
                )}
              </div>
              <div className="flex grow flex-col p-5">
                <h3 className="font-display text-lg font-medium leading-snug">{p.name}</h3>
                <p className="mt-1 text-[13px] text-ink-800/60">{p.scent}</p>
                <div className="mt-2.5 flex items-center gap-1.5">
                  <Star size={13} fill="currentColor" strokeWidth={0} className="text-gold-500" />
                  <span className="text-[12px] font-semibold text-ink-800/70">4.8</span>
                  <span className="ml-auto flex items-center gap-1.5" title="Scent notes">
                    {p.dots.map((c) => (
                      <span
                        key={c}
                        className="h-3.5 w-3.5 rounded-full border border-ink-900/15"
                        style={{ background: c }}
                      />
                    ))}
                  </span>
                </div>
                <div className="mt-auto pt-4 flex items-center justify-between border-t border-ink-900/10">
                  <span className="font-display text-[22px] font-semibold text-terra-600">
                    ₹{p.price}
                  </span>
                  <span className="inline-flex items-center gap-1.5 text-[12px] font-semibold uppercase tracking-[0.14em] text-ink-900 group-hover:text-terra-600 transition-colors">
                    Buy now <ArrowUpRight size={14} strokeWidth={2.2} />
                  </span>
                </div>
              </div>
            </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

function Marquee() {
  return (
    <section className="relative">
      <img
        src="/img/marquee.jpg"
        alt="Divine Jasmine, Orange Bliss and Jade Breeze sprays on a stone ledge"
        className="w-full object-cover max-h-[520px] min-h-[320px]"
      />
      <div className="absolute inset-0 bg-ink-900/25 flex items-end">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 pb-10 w-full flex flex-wrap items-end justify-between gap-4">
          <p className="font-display italic text-2xl sm:text-4xl text-sand-50 max-w-lg leading-snug drop-shadow">
            “Like nature in a bottle — so pure and subtle.”
          </p>
          <p className="text-[12px] font-semibold uppercase tracking-[0.2em] text-sand-100/90">
            Pooja Hood — Haryana
          </p>
        </div>
      </div>
    </section>
  )
}

function Craft() {
  return (
    <section id="craft" className="relative bg-sand-100 overflow-hidden">
      <img src="/decor/botanical-line.svg" alt="" className="decor absolute -right-24 top-10 h-[420px] w-[420px] opacity-[0.1] hidden lg:block" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 py-20 lg:py-28 grid lg:grid-cols-2 gap-14 items-center">
        <div className="grid gap-5 order-2 lg:order-1">
          <img
            src="/img/story-kannauj.jpg"
            alt="Artisan steam-distilling flower petals in a copper vessel in Kannauj"
            className="w-full object-cover aspect-[4/3]"
          />
          <div className="grid grid-cols-[1fr_auto] gap-5 items-stretch">
            <img
              src="/img/ingredients.jpg"
              alt="Fresh cucumber, beetroot, lavender and essential oils flat-lay"
              className="w-full h-full object-cover"
            />
            <div className="hidden sm:flex w-36 flex-col items-center justify-center gap-3 bg-olive-600 text-sand-50 p-4 text-center">
              <img src="/decor/botanical-spray.svg" alt="" className="decor decor-light h-16 w-16 opacity-90" />
              <p className="font-display italic text-lg leading-tight">400 years of perfume craft</p>
            </div>
          </div>
        </div>
        <div className="order-1 lg:order-2">
          <Eyebrow>From flower to bottle</Eyebrow>
          <h2 className="mt-4 font-display text-4xl sm:text-5xl font-medium tracking-tight leading-[1.05]">
            Born in Kannauj, <br />
            <span className="italic text-olive-600">India’s perfume capital</span>
          </h2>
          <p className="mt-5 max-w-lg text-[15px] leading-relaxed text-ink-800/75">
            No factory perfume tanks. Just families who have distilled flowers for generations — and
            a process you can actually understand.
          </p>
          <ol className="mt-10 relative">
            <span className="absolute left-[19px] top-8 bottom-10 w-px bg-terra-600/25" aria-hidden />
            {STEPS.map((s, i) => (
              <li key={s.n} className="py-5">
              <Reveal delay={i * 70} className="flex gap-5">
                <span className="relative z-10 self-start bg-sand-100 pb-1.5 font-display italic text-3xl font-medium text-terra-600/80 w-12 shrink-0">
                  {s.n}
                </span>
                <div>
                  <h3 className="flex items-center gap-2.5 font-display text-xl font-medium">
                    <s.icon size={18} strokeWidth={1.7} className="text-olive-600" />
                    {s.title}
                  </h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-ink-800/70">{s.text}</p>
                </div>
              </Reveal>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  )
}

function PetSafe() {
  return (
    <section className="bg-sand-100">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 py-20 lg:py-28 grid lg:grid-cols-2 gap-14 items-center">
        <div className="relative">
          <img
            src="/img/petsafe.jpg"
            alt="A dog and cat relaxing on a sofa beside a Bloom Green air freshener"
            className="w-full object-cover aspect-[4/3]"
          />
          <div className="absolute -bottom-6 -right-4 sm:right-6 bg-terra-600 text-sand-50 px-6 py-5 max-w-[220px]">
            <p className="font-display italic text-xl leading-snug">Happy tails, twitching whiskers.</p>
          </div>
        </div>
        <div>
          <Eyebrow>Safe scents, happy tails</Eyebrow>
          <h2 className="mt-4 font-display text-4xl sm:text-5xl font-medium tracking-tight leading-[1.05]">
            Gentle enough for <br />
            <span className="italic text-terra-600">the whole family</span>
          </h2>
          <ul className="mt-9 space-y-4">
            {[
              'Free from harsh, gas-based propellants and chemicals',
              'Won’t irritate sensitive noses or trigger allergies',
              'Safe to spray around babies, kids, dogs and cats',
              'Full ingredient transparency on every label',
            ].map((t) => (
              <li key={t} className="flex items-start gap-3.5 text-[15px] text-ink-800/85">
                <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-olive-500/15 text-olive-600">
                  <Check size={14} strokeWidth={2.5} />
                </span>
                {t}
              </li>
            ))}
          </ul>
          <a
            href={`${SHOP}/collections/all`}
            className="mt-9 inline-flex items-center gap-2.5 bg-ink-900 px-7 py-4 text-[13px] font-semibold uppercase tracking-[0.16em] text-sand-100 hover:bg-terra-600 transition-colors"
          >
            Shop pet-safe scents <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  )
}

function Stars({ size = 14 }) {
  return (
    <span className="flex items-center gap-1 text-gold-400">
      {[...Array(5)].map((_, i) => (
        <Star key={i} size={size} fill="currentColor" strokeWidth={0} />
      ))}
    </span>
  )
}

function Reviews() {
  return (
    <section id="reviews" className="bg-olive-600 text-sand-50 relative overflow-hidden">
      <img src="/decor/botanical-spray.svg" alt="" className="decor decor-light absolute -left-16 -bottom-16 h-80 w-80 opacity-[0.08]" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 py-20 lg:py-28">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div>
            <Eyebrow light>Real stories, real freshness</Eyebrow>
            <h2 className="mt-4 font-display text-4xl sm:text-5xl font-medium tracking-tight">
              What customers <span className="italic text-gold-400">say</span>
            </h2>
          </div>
          <div className="flex items-center gap-2.5">
            <Stars size={18} />
            <span className="text-sm text-sand-50/80">
              <b className="text-sand-50">4.8</b> · 10,000+ homes
            </span>
          </div>
        </div>

        <div className="mt-12 grid lg:grid-cols-[1.05fr_1fr] gap-10 lg:gap-14 items-center">
          {/* featured quote */}
          <Reveal>
          <figure className="relative">
            <span className="font-display italic text-[80px] sm:text-[120px] leading-none text-gold-400/70 absolute -top-6 sm:-top-10 -left-1 sm:-left-2 select-none">
              “
            </span>
            <blockquote className="relative font-display text-[26px] sm:text-[32px] leading-[1.3] font-medium">
              {FEATURED_REVIEW.text}
            </blockquote>
            <figcaption className="mt-8 flex items-center gap-4">
              <img
                src={FEATURED_REVIEW.avatar}
                alt={`Portrait of ${FEATURED_REVIEW.name}`}
                className="h-16 w-16 rounded-full object-cover border-2 border-gold-400"
              />
              <div>
                <p className="text-[13px] font-semibold uppercase tracking-[0.18em]">
                  {FEATURED_REVIEW.name}
                  <span className="font-normal normal-case tracking-normal text-sand-50/60">
                    {' '}— {FEATURED_REVIEW.place}
                  </span>
                </p>
                <p className="mt-1.5 flex items-center gap-3">
                  <Stars />
                  <span className="text-[12px] text-sand-50/60">{FEATURED_REVIEW.uses}</span>
                </p>
              </div>
            </figcaption>
          </figure>
          </Reveal>

          {/* review cards */}
          <div className="grid sm:grid-cols-2 gap-4">
            {REVIEWS.map((r, i) => (
              <Reveal key={r.name} delay={i * 90}>
              <figure
                className="h-full bg-olive-700/60 border border-sand-50/10 p-6 flex flex-col hover:border-gold-400/40 transition-colors"
              >
                <div className="flex items-center gap-3">
                  <img
                    src={r.avatar}
                    alt={`Portrait of ${r.name}`}
                    className="h-11 w-11 rounded-full object-cover border border-sand-50/30"
                  />
                  <div>
                    <p className="text-[12px] font-semibold uppercase tracking-[0.14em] leading-tight">
                      {r.name}
                    </p>
                    <p className="text-[11px] text-sand-50/55">{r.place}</p>
                  </div>
                  <span className="ml-auto"><Stars size={11} /></span>
                </div>
                <blockquote className="mt-4 grow text-[13.5px] leading-relaxed text-sand-50/85">
                  “{r.text}”
                </blockquote>
                <figcaption className="mt-4 pt-3 border-t border-sand-50/10 text-[11px] uppercase tracking-[0.14em] text-gold-400/90">
                  {r.uses}
                </figcaption>
              </figure>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

function Faq() {
  const [open, setOpen] = useState(0)
  return (
    <section id="faq" className="bg-sand-100">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 py-20 lg:py-28 grid lg:grid-cols-[1fr_1.7fr] gap-x-16 gap-y-10 items-start">
        <div className="lg:sticky lg:top-24">
          <Eyebrow>FAQ</Eyebrow>
          <h2 className="mt-4 font-display text-4xl sm:text-5xl font-medium tracking-tight">
            Questions, <span className="italic text-olive-600">answered</span>
          </h2>
          <p className="mt-4 max-w-sm text-[15px] leading-relaxed text-ink-800/70">
            Everything about what’s inside the bottle, who it’s safe for, and how it gets to you.
          </p>
          <div className="mt-8 border border-ink-900/15 bg-sand-50 p-6 max-w-sm">
            <p className="font-display text-xl font-medium">Still curious?</p>
            <p className="mt-1.5 text-sm leading-relaxed text-ink-800/70">
              The team behind the stills answers questions on chat — usually within the hour.
            </p>
            <a
              href={SHOP}
              className="mt-5 inline-flex items-center gap-2 border-2 border-ink-900 px-5 py-3 text-[12px] font-semibold uppercase tracking-[0.16em] text-ink-900 hover:bg-ink-900 hover:text-sand-50 transition-colors"
            >
              Chat with us <ArrowUpRight size={14} strokeWidth={2.2} />
            </a>
          </div>
        </div>
        <div className="divide-y divide-ink-900/10 border-y border-ink-900/10">
          {FAQS.map((f, i) => (
            <div key={f.q}>
              <button
                onClick={() => setOpen(open === i ? -1 : i)}
                className="flex w-full items-center justify-between gap-4 py-6 text-left font-display text-lg sm:text-xl font-medium hover:text-terra-600 transition-colors"
              >
                {f.q}
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-ink-900/25 text-terra-600">
                  {open === i ? <Minus size={15} /> : <Plus size={15} />}
                </span>
              </button>
              {open === i && (
                <p className="pb-6 text-[15px] leading-relaxed text-ink-800/75">{f.a}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function Offer() {
  return (
    <section className="bg-terra-600 text-sand-50 relative overflow-hidden">
      <img src="/decor/botanical-line.svg" alt="" className="decor decor-light absolute -right-16 -top-20 h-96 w-96 opacity-[0.1]" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 py-16 lg:py-20 grid lg:grid-cols-[1fr_auto] gap-10 items-center">
        <div>
          <p className="flex items-center gap-3 text-[11px] font-semibold uppercase tracking-[0.28em] text-sand-50/80">
            <BadgePercent size={16} /> First order offer
          </p>
          <h2 className="mt-4 font-display text-4xl sm:text-5xl lg:text-6xl font-medium tracking-tight leading-[1.02]">
            Take <span className="italic">10% off</span> your first breath of real freshness.
          </h2>
          <p className="mt-4 flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-sand-50/85">
            <span className="inline-flex items-center gap-2">
              <ShieldCheck size={16} /> Code <b className="tracking-widest">WELCOME10</b> at checkout
            </span>
            <span className="inline-flex items-center gap-2">
              <Truck size={16} /> Free shipping over ₹999
            </span>
          </p>
        </div>
        <a
          href={`${SHOP}/collections/all`}
          className="inline-flex items-center gap-3 bg-ink-900 px-9 py-5 text-[13px] font-semibold uppercase tracking-[0.18em] text-sand-50 hover:bg-sand-50 hover:text-ink-900 transition-colors justify-self-start lg:justify-self-end"
        >
          Start shopping <ArrowRight size={17} />
        </a>
      </div>
    </section>
  )
}

function MobileBuyBar() {
  return (
    <div className="lg:hidden fixed bottom-0 inset-x-0 z-50 bg-ink-900/95 backdrop-blur-md border-t border-sand-100/10 px-4 py-3 flex items-center justify-between gap-3">
      <div className="min-w-0">
        <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-sand-100/55 truncate">
          Plant-based · Pet safe
        </p>
        <p className="font-display text-lg leading-tight text-sand-50">
          From <span className="text-gold-400">₹199</span>
        </p>
      </div>
      <a
        href={`${SHOP}/collections/all`}
        className="shrink-0 inline-flex items-center gap-2 bg-terra-600 px-6 py-3.5 text-[12px] font-semibold uppercase tracking-[0.16em] text-sand-50 active:bg-terra-700"
      >
        Shop now <ArrowUpRight size={14} strokeWidth={2.2} />
      </a>
    </div>
  )
}

function Footer() {
  return (
    <footer className="bg-ink-900 text-sand-100/60 pb-20 lg:pb-0">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 pt-16 pb-10">
        <div className="grid sm:grid-cols-3 gap-10 pb-12 border-b border-sand-100/10">
          <div>
            <div className="flex items-center gap-3">
              <Logo dark />
              <span className="font-display text-xl font-semibold text-sand-50">
                Bloom<span className="italic text-terra-400">Green</span>
              </span>
            </div>
            <p className="mt-4 text-sm leading-relaxed">
              Plant-based air fresheners, candles and camphor cones — steam-distilled from real
              botanicals in Kannauj, India.
            </p>
          </div>
          <div className="text-sm">
            <h3 className="text-[11px] font-semibold uppercase tracking-[0.22em] text-sand-50 mb-4">Shop</h3>
            <ul className="space-y-2.5">
              <li><a className="hover:text-sand-50 transition-colors" href={`${SHOP}/collections/all`}>All products</a></li>
              <li><a className="hover:text-sand-50 transition-colors" href={SHOP}>thebloomgreen.com</a></li>
            </ul>
          </div>
          <div className="text-sm">
            <h3 className="text-[11px] font-semibold uppercase tracking-[0.22em] text-sand-50 mb-4">Explore</h3>
            <ul className="space-y-2.5">
              <li><a className="hover:text-sand-50 transition-colors" href="#craft">Our craft</a></li>
              <li><a className="hover:text-sand-50 transition-colors" href="#reviews">Reviews</a></li>
              <li><a className="hover:text-sand-50 transition-colors" href="#faq">FAQ</a></li>
            </ul>
          </div>
        </div>
        <div className="pt-8 flex flex-wrap items-center gap-2">
          {[
            [ShieldCheck, 'Secure checkout'],
            [Truck, 'Ships across India'],
            [BadgePercent, '10% off first order'],
            [Recycle, 'Eco-friendly packaging'],
          ].map(([Icon, label]) => (
            <span
              key={label}
              className="inline-flex items-center gap-2 rounded-full border border-sand-100/15 px-3.5 py-1.5 text-[11px] font-medium uppercase tracking-[0.12em] text-sand-100/60"
            >
              <Icon size={13} strokeWidth={1.8} /> {label}
            </span>
          ))}
        </div>
        <div className="pt-6 flex flex-wrap items-center justify-between gap-3 text-xs text-sand-100/35">
          <span>© {new Date().getFullYear()} Bloom Green — made with real flowers in Kannauj, India</span>
          <span className="font-display italic text-sm text-sand-100/50">breathe better.</span>
        </div>
      </div>
    </footer>
  )
}

export default function App() {
  return (
    <>
      <AnnouncementBar />
      <Nav />
      <main>
        <Hero />
        <MosaicStrip />
        <TrustBar />
        <Categories />
        <Bestsellers />
        <Marquee />
        <Craft />
        <PetSafe />
        <Reviews />
        <Faq />
        <Offer />
      </main>
      <Footer />
      <MobileBuyBar />
    </>
  )
}
