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
  Search,
  User,
  ShoppingBag,
  Flower2,
  HeartHandshake,
} from 'lucide-react'

const SHOP = 'https://www.thebloomgreen.com'

/* ---------------------------------------------------------------- data */

const CATEGORIES = [
  {
    name: 'Room Sprays',
    tag: 'From ₹199',
    desc: 'One spritz of real flowers for bedrooms & workspaces.',
    img: '/img/category-room.webp',
  },
  {
    name: 'Car Fragrances',
    tag: 'Gels & sprays',
    desc: 'Dashboard gels and sprays that outlast every commute.',
    img: '/img/category-car.webp',
  },
  {
    name: 'Botanical Candles',
    tag: '16+ hr burn',
    desc: 'Organic soy-wax candles with wooden lids and a clean burn.',
    img: '/img/category-candle.webp',
  },
  {
    name: 'Camphor Cones',
    tag: 'Prayer-room ready',
    desc: 'Natural camphor pouches for wardrobes & quiet corners.',
    img: '/img/category-cone.webp',
  },
]

const BESTSELLERS = [
  {
    name: 'Room Spray — Jasmine 100ml',
    offer: 'Buy 1 Get 1 Free',
    scent: 'Fresh jasmine · floral morning',
    dots: ['#f2f0e4', '#8a9a7b'],
    price: 299,
    img: '/img/category-room.webp',
    href: `${SHOP}/products/divine-jasmine-natural-air-freshener-spray-refreshing-floral-aroma-100ml`,
  },
  {
    name: 'Botanical Candle — Rose & Vetiver',
    offer: 'Combo Offer',
    scent: 'Rose & vetiver · hand-poured wax',
    dots: ['#c98f9c', '#556b4f'],
    price: 599,
    img: '/img/category-candle.webp',
    href: `${SHOP}/collections/all`,
  },
  {
    name: 'Car Fragrance — Mogra',
    offer: null,
    scent: 'Mogra bloom · every commute',
    dots: ['#f2ead8', '#a97f4f'],
    price: 199,
    img: '/img/category-car.webp',
    href: `${SHOP}/collections/all`,
  },
  {
    name: 'Camphor Cones — Tin',
    offer: null,
    scent: 'Pure camphor · steam distilled',
    dots: ['#f5f5f0', '#b8b8b2'],
    price: 199,
    img: '/img/category-cone.webp',
    href: `${SHOP}/collections/all`,
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

const VALUES = ['Botanical', 'Artisanal', 'Made in India', 'Cruelty free', 'Clean & conscious']

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
        dark ? 'ring-1 ring-blush-100/25' : 'ring-1 ring-ink-900/15'
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
        light ? 'text-blush-150' : 'text-pine-600'
      }`}
    >
      <span className={`h-px w-8 ${light ? 'bg-blush-150' : 'bg-pine-600'}`} />
      {children}
    </p>
  )
}

/* ------------------------------------------------------------ sections */

function Nav() {
  const [open, setOpen] = useState(false)
  const links = [
    ['Shop', '#bestsellers'],
    ['Fragrances', '#categories'],
    ['Our Story', '#reviews'],
    ['Kannauj', '#craft'],
    ['Journal', '#faq'],
  ]
  return (
    <header className="sticky top-0 z-50 bg-blush-100/95 backdrop-blur-md border-b border-ink-900/10">
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 flex items-center justify-between h-[76px]">
        <a href="#top" className="flex items-center gap-3">
          <Logo />
          <span className="flex flex-col">
            <span className="font-display text-[22px] font-semibold tracking-tight leading-none text-pine-700">
              Bloom<span className="italic text-pine-600">Green</span>
            </span>
            <span className="mt-1 text-[8.5px] font-semibold uppercase tracking-[0.34em] text-ink-600">
              Nature, distilled.
            </span>
          </span>
        </a>
        <div className="hidden md:flex items-center gap-8">
          {links.map(([label, href]) => (
            <a
              key={label}
              href={href}
              className="text-[13px] font-medium uppercase tracking-[0.14em] text-ink-800 hover:text-pine-600 transition-colors"
            >
              {label}
            </a>
          ))}
        </div>
        <div className="flex items-center gap-0.5 sm:gap-1.5 text-ink-800">
          <a href={`${SHOP}/search`} aria-label="Search" className="p-2 hover:text-pine-600 transition-colors">
            <Search size={19} strokeWidth={1.8} />
          </a>
          <a href={`${SHOP}/account`} aria-label="Account" className="hidden sm:block p-2 hover:text-pine-600 transition-colors">
            <User size={19} strokeWidth={1.8} />
          </a>
          <a href={`${SHOP}/cart`} aria-label="Cart" className="relative p-2 hover:text-pine-600 transition-colors">
            <ShoppingBag size={19} strokeWidth={1.8} />
            <span className="absolute -top-0.5 right-0 flex h-4 w-4 items-center justify-center rounded-full bg-pine-600 text-[9px] font-bold leading-none text-blush-50">
              0
            </span>
          </a>
          <button className="md:hidden p-2" onClick={() => setOpen(!open)} aria-label="Menu">
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </nav>
      {open && (
        <div className="md:hidden border-t border-ink-900/10 bg-blush-50 px-6 py-4 flex flex-col gap-3">
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

const HERO_FEATURES = [
  [Flower2, 'Real ingredients', 'Flowers, herbs & vegetables'],
  [FlaskConical, 'Steam distilled', 'The traditional Kannauj way'],
  [Leaf, 'Natural & safe', 'No synthetic perfume, no gas'],
  [HeartHandshake, 'Made with care', 'For you, your home & the planet'],
]

function Hero() {
  return (
    <section id="top" className="relative bg-blush-100 overflow-hidden">
      {/* faint botanical watermark */}
      <img
        src="/decor/botanical-spray.svg"
        alt=""
        aria-hidden
        className="decor absolute -left-14 top-10 h-72 w-72 opacity-10 -scale-x-100"
      />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 pt-10 pb-10 lg:pt-16 lg:pb-14 grid lg:grid-cols-[1.02fr_1fr] gap-12 lg:gap-14 items-center">
        {/* left — copy */}
        <div>
          <p className="fade-up flex flex-wrap items-center gap-x-3 gap-y-1 text-[11px] font-semibold uppercase tracking-[0.24em] text-pine-700">
            Natural fragrance <span className="text-pine-600" aria-hidden>•</span> Kannauj, India
          </p>
          <h1
            className="fade-up mt-4 font-display text-[38px] min-[420px]:text-[42px] sm:text-[47px] xl:text-[51px] font-medium leading-[1.08] tracking-tight text-pine-700"
            style={{ animationDelay: '120ms' }}
          >
            Nature, <span className="italic">distilled.</span>
            <br />
            From Kannauj, with love.
          </h1>
          <p
            className="fade-up mt-5 max-w-lg text-base lg:text-[17px] leading-relaxed text-ink-700"
            style={{ animationDelay: '240ms' }}
          >
            Steam-distilled from real flowers, herbs and vegetables — never synthetic perfume,
            never gas.
          </p>
          <ul
            className="fade-up mt-9 grid grid-cols-2 sm:grid-cols-4 gap-y-6 sm:divide-x sm:divide-ink-900/15"
            style={{ animationDelay: '340ms' }}
          >
            {HERO_FEATURES.map(([Icon, label, desc], i) => (
              <li key={label} className={`pr-3 ${i > 0 ? 'sm:pl-5' : ''}`}>
                <Icon size={26} strokeWidth={1.4} className="text-pine-700" />
                <p className="mt-2.5 text-[11px] font-bold uppercase tracking-[0.08em] text-ink-900 leading-tight">
                  {label}
                </p>
                <p className="mt-1 text-[12px] leading-snug text-ink-600">{desc}</p>
              </li>
            ))}
          </ul>
          <a
            href={`${SHOP}/collections/all`}
            className="fade-up mt-9 inline-flex items-center gap-3 bg-pine-600 px-8 py-4 text-[13px] font-semibold uppercase tracking-[0.18em] text-blush-50 hover:bg-pine-700 transition-colors"
            style={{ animationDelay: '440ms' }}
          >
            Explore collection <ArrowRight size={16} strokeWidth={2.2} />
          </a>
        </div>
        {/* right — product still-life with Kannauj stamp */}
        <div className="fade-up relative mt-6 lg:mt-0" style={{ animationDelay: '200ms' }}>
          <img
            src="/img/hero-still.webp"
            alt="Bloom Green room spray, botanical candle, car fragrance and camphor cones arranged with jasmine, a rose and a brass urli"
            className="w-full object-cover"
            style={{
              maskImage:
                'radial-gradient(115% 115% at 55% 45%, black 62%, transparent 96%)',
              WebkitMaskImage:
                'radial-gradient(115% 115% at 55% 45%, black 62%, transparent 96%)',
            }}
          />
        </div>
      </div>
    </section>
  )
}

function MosaicStrip() {
  const cats = [
    ['/img/thumb-room.webp', 'Room Sprays', 'Refresh your everyday spaces'],
    ['/img/thumb-car.webp', 'Car Fragrances', "Drive in nature's goodness"],
    ['/img/thumb-candle.webp', 'Botanical Candles', 'Hand-poured calm, naturally'],
    ['/img/thumb-cone.webp', 'Camphor Cones', 'Purify the air, the natural way'],
  ]
  return (
    <div className="bg-blush-100 px-4 sm:px-6 pb-12 lg:pb-14">
      <div className="mx-auto max-w-7xl bg-blush-50 border border-ink-900/10 grid sm:grid-cols-2 lg:grid-cols-4 divide-y sm:divide-y-0 divide-ink-900/10 lg:divide-x">
        {cats.map(([img, name, desc]) => (
          <a
            key={name}
            href={`${SHOP}/collections/all`}
            className="group flex items-center gap-4 p-5 sm:p-6"
          >
            <img src={img} alt={name} className="h-16 w-16 shrink-0 rounded-sm object-cover" />
            <span className="min-w-0">
              <span className="block text-[12px] font-bold uppercase tracking-[0.1em] text-ink-900 group-hover:text-pine-600 transition-colors">
                {name}
              </span>
              <span className="mt-1 block text-[12.5px] leading-snug text-ink-600">{desc}</span>
              <ArrowRight
                size={14}
                strokeWidth={2.2}
                className="mt-2 text-pine-600 transition-transform group-hover:translate-x-1"
              />
            </span>
          </a>
        ))}
      </div>
    </div>
  )
}

function ValuesBand() {
  return (
    <div className="relative bg-pine-700 text-blush-50 overflow-hidden">
      <img
        src="/decor/botanical-line.svg"
        alt=""
        aria-hidden
        className="decor decor-light absolute -left-8 -top-10 h-36 w-36 opacity-25 hidden sm:block"
      />
      <img
        src="/decor/botanical-line.svg"
        alt=""
        aria-hidden
        className="decor decor-light absolute -right-8 -bottom-10 h-36 w-36 opacity-25 -scale-x-100 hidden sm:block"
      />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 py-5 flex flex-wrap items-center justify-center gap-x-4 gap-y-2">
        {VALUES.map((t, i) => (
          <span key={t} className="flex items-center gap-4 text-[12px] font-semibold uppercase tracking-[0.24em]">
            {i > 0 && (
              <span className="text-pine-300" aria-hidden>
                •
              </span>
            )}
            {t}
          </span>
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
    <div className="hidden lg:block border-b border-ink-900/10 bg-blush-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 py-6 lg:py-7 flex flex-wrap justify-center gap-2 lg:grid lg:grid-cols-5 lg:gap-x-6">
        {items.map(([Icon, label]) => (
          <div
            key={label}
            className="flex items-center gap-2 rounded-full border border-pine-500/30 bg-blush-100 px-3.5 py-2 lg:justify-center lg:gap-3 lg:rounded-none lg:border-0 lg:bg-transparent lg:px-0 lg:py-0"
          >
            <span className="text-pine-600 lg:flex lg:h-10 lg:w-10 lg:items-center lg:justify-center lg:rounded-full lg:border lg:border-pine-500/40">
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
    <section id="categories" className="relative bg-blush-100 overflow-hidden">
      <span className="ghost-word absolute -top-8 right-0 text-[26vw] hidden lg:block">bloom</span>
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 py-20 lg:py-28">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div className="max-w-xl">
            <Eyebrow>Shop by category</Eyebrow>
            <h2 className="mt-4 font-display text-4xl sm:text-5xl font-medium tracking-tight">
              Every space, <span className="italic text-pine-600">one honest scent</span>
            </h2>
          </div>
          <p className="max-w-xs text-sm leading-relaxed text-ink-700">
            Four simple product families — all plant-based, chemical-free and crafted by hand in
            Kannauj.
          </p>
        </div>
        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-px bg-ink-900/10 border border-ink-900/10">
          {CATEGORIES.map((c, i) => (
            <Reveal key={c.name} delay={i * 90} className="h-full">
            <a
              href={`${SHOP}/collections/all`}
              className="group relative block h-full bg-blush-50 p-4 pb-6 hover:bg-blush-50/60 transition-colors"
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
                  <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-pine-600">
                    {String(i + 1).padStart(2, '0')} — {c.tag}
                  </p>
                  <h3 className="mt-1.5 font-display text-[26px] font-medium leading-tight">
                    {c.name}
                  </h3>
                  <p className="mt-1.5 text-[13px] leading-snug text-ink-700">{c.desc}</p>
                </div>
                <span className="mt-1 flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-ink-900/25 text-ink-900 transition-all group-hover:bg-pine-600 group-hover:border-pine-600 group-hover:text-blush-50">
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
    <section id="bestsellers" className="bg-blush-200/70 border-y border-ink-900/10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 py-20 lg:py-28">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div className="max-w-xl">
            <Eyebrow>Bestsellers</Eyebrow>
            <h2 className="mt-4 font-display text-4xl sm:text-5xl font-medium tracking-tight">
              Loved in <span className="italic text-pine-600">10,000+</span> homes
            </h2>
          </div>
          <a
            href={`${SHOP}/collections/all`}
            className="inline-flex items-center gap-2 border-b-2 border-ink-900 pb-1 text-[13px] font-semibold uppercase tracking-[0.16em] hover:text-pine-600 hover:border-pine-600 transition-colors"
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
              className="flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.14em] text-ink-700"
            >
              <Icon size={15} strokeWidth={1.8} className="text-pine-600" />
              {label}
            </li>
          ))}
        </ul>
        <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {BESTSELLERS.map((p, i) => (
            <Reveal key={p.name} delay={i * 90}>
            <a href={p.href} className="group flex h-full flex-col bg-blush-50 border border-ink-900/10 hover:border-ink-900/30 hover:shadow-[8px_8px_0_0_rgba(41,32,24,0.12)] transition-all duration-300">
              <div className="relative overflow-hidden">
                <img
                  src={p.img}
                  alt={p.name}
                  className="aspect-[4/5] w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                {p.offer && (
                  <span className="absolute top-3 left-3 inline-flex items-center gap-1.5 bg-pine-600 text-blush-50 text-[11px] font-bold uppercase tracking-[0.12em] px-3 py-1.5">
                    <BadgePercent size={13} /> {p.offer}
                  </span>
                )}
              </div>
              <div className="flex grow flex-col p-5">
                <h3 className="font-display text-lg font-medium leading-snug">{p.name}</h3>
                <p className="mt-1 text-[13px] text-ink-600">{p.scent}</p>
                <div className="mt-2.5 flex items-center gap-1.5">
                  <Star size={13} fill="currentColor" strokeWidth={0} className="text-pine-500" />
                  <span className="text-[12px] font-semibold text-ink-700">4.8</span>
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
                  <span className="font-display text-[22px] font-semibold text-pine-600">
                    ₹{p.price}
                  </span>
                  <span className="inline-flex items-center gap-1.5 text-[12px] font-semibold uppercase tracking-[0.14em] text-ink-900 group-hover:text-pine-600 transition-colors">
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
        src="/img/hero-warm.jpg"
        alt="Bloom Green spray, botanical candle and camphor pouch in warm evening light"
        className="w-full object-cover max-h-[520px] min-h-[320px]"
      />
      <div className="absolute inset-0 bg-ink-900/65 flex items-end">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 pb-10 w-full flex flex-wrap items-end justify-between gap-4">
          <p className="font-display italic text-2xl sm:text-4xl text-blush-50 max-w-lg leading-snug drop-shadow">
            “Like nature in a bottle — so pure and subtle.”
          </p>
          <p className="text-[12px] font-semibold uppercase tracking-[0.2em] text-blush-50">
            Pooja Hood — Haryana
          </p>
        </div>
      </div>
    </section>
  )
}

function Craft() {
  return (
    <section id="craft" className="relative bg-blush-100 overflow-hidden">
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
            <div className="hidden sm:flex w-36 flex-col items-center justify-center gap-3 bg-pine-600 text-blush-50 p-4 text-center">
              <img src="/decor/botanical-spray.svg" alt="" className="decor decor-light h-16 w-16 opacity-90" />
              <p className="font-display italic text-lg leading-tight">400 years of perfume craft</p>
            </div>
          </div>
        </div>
        <div className="order-1 lg:order-2">
          <Eyebrow>From flower to bottle</Eyebrow>
          <h2 className="mt-4 font-display text-4xl sm:text-5xl font-medium tracking-tight leading-[1.05]">
            Born in Kannauj, <br />
            <span className="italic text-pine-600">India’s perfume capital</span>
          </h2>
          <p className="mt-5 max-w-lg text-[15px] leading-relaxed text-ink-700">
            No factory perfume tanks. Just families who have distilled flowers for generations — and
            a process you can actually understand.
          </p>
          <ol className="mt-10 relative">
            <span className="absolute left-[19px] top-8 bottom-10 w-px bg-pine-600/25" aria-hidden />
            {STEPS.map((s, i) => (
              <li key={s.n} className="py-5">
              <Reveal delay={i * 70} className="flex gap-5">
                <span className="relative z-10 self-start bg-blush-100 pb-1.5 font-display italic text-3xl font-medium text-pine-600 w-12 shrink-0">
                  {s.n}
                </span>
                <div>
                  <h3 className="flex items-center gap-2.5 font-display text-xl font-medium">
                    <s.icon size={18} strokeWidth={1.7} className="text-pine-600" />
                    {s.title}
                  </h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-ink-700">{s.text}</p>
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
    <section className="bg-blush-100">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 py-20 lg:py-28 grid lg:grid-cols-2 gap-14 items-center">
        <div className="relative">
          <img
            src="/img/petsafe.jpg"
            alt="A dog and cat relaxing on a sofa beside a Bloom Green air freshener"
            className="w-full object-cover aspect-[4/3]"
          />
          <div className="absolute -bottom-6 -right-4 sm:right-6 bg-pine-600 text-blush-50 px-6 py-5 max-w-[220px]">
            <p className="font-display italic text-xl leading-snug">Happy tails, twitching whiskers.</p>
          </div>
        </div>
        <div>
          <Eyebrow>Safe scents, happy tails</Eyebrow>
          <h2 className="mt-4 font-display text-4xl sm:text-5xl font-medium tracking-tight leading-[1.05]">
            Gentle enough for <br />
            <span className="italic text-pine-600">the whole family</span>
          </h2>
          <ul className="mt-9 space-y-4">
            {[
              'Free from harsh, gas-based propellants and chemicals',
              'Won’t irritate sensitive noses or trigger allergies',
              'Safe to spray around babies, kids, dogs and cats',
              'Full ingredient transparency on every label',
            ].map((t) => (
              <li key={t} className="flex items-start gap-3.5 text-[15px] text-ink-800">
                <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-pine-500/15 text-pine-600">
                  <Check size={14} strokeWidth={2.5} />
                </span>
                {t}
              </li>
            ))}
          </ul>
          <a
            href={`${SHOP}/collections/all`}
            className="mt-9 inline-flex items-center gap-2.5 bg-ink-900 px-7 py-4 text-[13px] font-semibold uppercase tracking-[0.16em] text-blush-100 hover:bg-pine-600 transition-colors"
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
    <span className="flex items-center gap-1 text-pine-300">
      {[...Array(5)].map((_, i) => (
        <Star key={i} size={size} fill="currentColor" strokeWidth={0} />
      ))}
    </span>
  )
}

function Reviews() {
  return (
    <section id="reviews" className="bg-pine-600 text-blush-50 relative overflow-hidden">
      <img src="/decor/botanical-spray.svg" alt="" className="decor decor-light absolute -left-16 -bottom-16 h-80 w-80 opacity-[0.08]" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 py-20 lg:py-28">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div>
            <Eyebrow light>Real stories, real freshness</Eyebrow>
            <h2 className="mt-4 font-display text-4xl sm:text-5xl font-medium tracking-tight">
              What customers <span className="italic text-blush-150">say</span>
            </h2>
          </div>
          <div className="flex items-center gap-2.5">
            <Stars size={18} />
            <span className="text-sm text-blush-100">
              <b className="text-blush-50">4.8</b> · 10,000+ homes
            </span>
          </div>
        </div>

        <div className="mt-12 grid lg:grid-cols-[1.05fr_1fr] gap-10 lg:gap-14 items-center">
          {/* featured quote */}
          <Reveal>
          <figure className="relative">
            <span className="font-display italic text-[80px] sm:text-[120px] leading-none text-pine-300 absolute -top-6 sm:-top-10 -left-1 sm:-left-2 select-none">
              “
            </span>
            <blockquote className="relative font-display text-[26px] sm:text-[32px] leading-[1.3] font-medium">
              {FEATURED_REVIEW.text}
            </blockquote>
            <figcaption className="mt-8 flex items-center gap-4">
              <img
                src={FEATURED_REVIEW.avatar}
                alt={`Portrait of ${FEATURED_REVIEW.name}`}
                className="h-16 w-16 rounded-full object-cover border-2 border-pine-300"
              />
              <div>
                <p className="text-[13px] font-semibold uppercase tracking-[0.18em]">
                  {FEATURED_REVIEW.name}
                  <span className="font-normal normal-case tracking-normal text-blush-150">
                    {' '}— {FEATURED_REVIEW.place}
                  </span>
                </p>
                <p className="mt-1.5 flex items-center gap-3">
                  <Stars />
                  <span className="text-[12px] text-blush-150">{FEATURED_REVIEW.uses}</span>
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
                className="h-full bg-pine-700/60 border border-blush-50/10 p-6 flex flex-col hover:border-pine-300/40 transition-colors"
              >
                <div className="flex items-center gap-3">
                  <img
                    src={r.avatar}
                    alt={`Portrait of ${r.name}`}
                    className="h-11 w-11 shrink-0 rounded-full object-cover border border-blush-50/30"
                  />
                  <div className="min-w-0">
                    <p className="text-[12px] font-semibold uppercase tracking-[0.12em] leading-tight">
                      {r.name}
                    </p>
                    <p className="text-[11px] text-blush-200">{r.place}</p>
                  </div>
                  <span className="ml-auto shrink-0"><Stars size={11} /></span>
                </div>
                <blockquote className="mt-4 grow text-[13.5px] leading-relaxed text-blush-200">
                  “{r.text}”
                </blockquote>
                <figcaption className="mt-4 pt-3 border-t border-blush-50/10 text-[11px] uppercase tracking-[0.14em] text-blush-150">
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
    <section id="faq" className="bg-blush-100">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 py-20 lg:py-28 grid lg:grid-cols-[1fr_1.7fr] gap-x-16 gap-y-10 items-start">
        <div className="lg:sticky lg:top-24">
          <Eyebrow>FAQ</Eyebrow>
          <h2 className="mt-4 font-display text-4xl sm:text-5xl font-medium tracking-tight">
            Questions, <span className="italic text-pine-600">answered</span>
          </h2>
          <p className="mt-4 max-w-sm text-[15px] leading-relaxed text-ink-700">
            Everything about what’s inside the bottle, who it’s safe for, and how it gets to you.
          </p>
          <div className="mt-8 border border-ink-900/15 bg-blush-50 p-6 max-w-sm">
            <p className="font-display text-xl font-medium">Still curious?</p>
            <p className="mt-1.5 text-sm leading-relaxed text-ink-700">
              The team behind the stills answers questions on chat — usually within the hour.
            </p>
            <a
              href={SHOP}
              className="mt-5 inline-flex items-center gap-2 border-2 border-ink-900 px-5 py-3 text-[12px] font-semibold uppercase tracking-[0.16em] text-ink-900 hover:bg-ink-900 hover:text-blush-50 transition-colors"
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
                className="flex w-full items-center justify-between gap-4 py-6 text-left font-display text-lg sm:text-xl font-medium hover:text-pine-600 transition-colors"
              >
                {f.q}
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-ink-900/25 text-pine-600">
                  {open === i ? <Minus size={15} /> : <Plus size={15} />}
                </span>
              </button>
              {open === i && (
                <p className="pb-6 text-[15px] leading-relaxed text-ink-700">{f.a}</p>
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
    <section className="bg-pine-600 text-blush-50 relative overflow-hidden">
      <img src="/decor/botanical-line.svg" alt="" className="decor decor-light absolute -right-16 -top-20 h-96 w-96 opacity-[0.1]" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 py-16 lg:py-20 grid lg:grid-cols-[1fr_auto] gap-10 items-center">
        <div>
          <p className="flex items-center gap-3 text-[11px] font-semibold uppercase tracking-[0.28em] text-blush-100">
            <BadgePercent size={16} /> First order offer
          </p>
          <h2 className="mt-4 font-display text-4xl sm:text-5xl lg:text-6xl font-medium tracking-tight leading-[1.02]">
            Take <span className="italic">10% off</span> your first breath of real freshness.
          </h2>
          <p className="mt-4 flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-blush-100">
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
          className="inline-flex items-center gap-3 bg-blush-50 px-9 py-5 text-[13px] font-semibold uppercase tracking-[0.18em] text-pine-800 hover:bg-ink-900 hover:text-blush-50 transition-colors justify-self-start lg:justify-self-end"
        >
          Start shopping <ArrowRight size={17} />
        </a>
      </div>
    </section>
  )
}

function MobileBuyBar() {
  return (
    <div className="lg:hidden fixed bottom-0 inset-x-0 z-50 bg-blush-100/97 backdrop-blur-md border-t border-ink-900/15 px-4 py-3 flex items-center justify-between gap-3">
      <div className="min-w-0">
        <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-ink-600 truncate">
          Plant-based · Pet safe
        </p>
        <p className="font-display text-lg leading-tight text-ink-900">
          From <span className="text-pine-600">₹199</span>
        </p>
      </div>
      <a
        href={`${SHOP}/collections/all`}
        className="shrink-0 inline-flex items-center gap-2 bg-pine-600 px-6 py-3.5 text-[12px] font-semibold uppercase tracking-[0.16em] text-blush-50 active:bg-pine-800"
      >
        Shop now <ArrowUpRight size={14} strokeWidth={2.2} />
      </a>
    </div>
  )
}

function Footer() {
  return (
    <footer className="bg-ink-900 text-blush-300 pb-20 lg:pb-0">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 pt-16 pb-10">
        <div className="grid sm:grid-cols-3 gap-10 pb-12 border-b border-blush-100/10">
          <div>
            <div className="flex items-center gap-3">
              <Logo dark />
              <span className="font-display text-xl font-semibold text-blush-50">
                Bloom<span className="italic text-pine-300">Green</span>
              </span>
            </div>
            <p className="mt-4 text-sm leading-relaxed">
              Plant-based air fresheners, candles and camphor cones — steam-distilled from real
              botanicals in Kannauj, India.
            </p>
          </div>
          <div className="text-sm">
            <h3 className="text-[11px] font-semibold uppercase tracking-[0.22em] text-blush-50 mb-4">Shop</h3>
            <ul className="space-y-2.5">
              <li><a className="hover:text-blush-50 transition-colors" href={`${SHOP}/collections/all`}>All products</a></li>
              <li><a className="hover:text-blush-50 transition-colors" href={SHOP}>thebloomgreen.com</a></li>
            </ul>
          </div>
          <div className="text-sm">
            <h3 className="text-[11px] font-semibold uppercase tracking-[0.22em] text-blush-50 mb-4">Explore</h3>
            <ul className="space-y-2.5">
              <li><a className="hover:text-blush-50 transition-colors" href="#craft">Our craft</a></li>
              <li><a className="hover:text-blush-50 transition-colors" href="#reviews">Reviews</a></li>
              <li><a className="hover:text-blush-50 transition-colors" href="#faq">FAQ</a></li>
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
              className="inline-flex items-center gap-2 rounded-full border border-blush-100/15 px-3.5 py-1.5 text-[11px] font-medium uppercase tracking-[0.12em] text-blush-300"
            >
              <Icon size={13} strokeWidth={1.8} /> {label}
            </span>
          ))}
        </div>
        <div className="pt-6 flex flex-wrap items-center justify-between gap-3 text-xs text-blush-300">
          <span>© {new Date().getFullYear()} Bloom Green — made with real flowers in Kannauj, India</span>
          <span className="font-display italic text-sm text-blush-300">breathe better.</span>
        </div>
      </div>
    </footer>
  )
}

export default function App() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <MosaicStrip />
        <ValuesBand />
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
