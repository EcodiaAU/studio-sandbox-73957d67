import type { ReactElement } from 'react';
import { HeroSection as Section0 } from './_generated/section-0';
import { ServicesSection as Section1 } from './_generated/section-1';
import { StorySection as Section2 } from './_generated/section-2';
import { CtaBandSection as Section3 } from './_generated/section-3';
import { ContactFormSection } from './_generated/ContactFormSection';

export default function Home(): ReactElement {
  return (
    <main data-eos-id="app/page.tsx#0" data-eos-v="2">
      <Section0 data-eos-id="app/page.tsx#1" {...{"eyebrow":"Marine conservation, made measurable","headline":"We bring dying reefs back to life","subhead":"We restore coral reefs along 1,900km of coastline, and show you exactly what your support repairs.","ctaLabel":"Fund a reef","ctaHref":"#donate","theme":{"primary":"#161616","primaryDark":"#000000","accent":"#161616","onPrimary":"#ffffff","onSurface":"#161616","surface":"#ffffff","surfaceAlt":"#f2f2f0","ink":"#161616","muted":"#6f6f6f","line":"#e6e6e4","radius":"0.875rem","maxWidth":"72rem"}}} />
      <Section1 data-eos-id="app/page.tsx#2" {...{"heading":"How I can help","subtitle":"Practical operations and systems support for small businesses that want to run calmer.","services":[{"title":"Operations review","description":"A clear-eyed audit of where your week leaks time, and a short plan to close the gaps."},{"title":"Systems and tooling","description":"One home for the work, set up so the team actually keeps it there."},{"title":"Delegation and handover","description":"Handover templates and boundaries so work stays handed over and stops bouncing back."}],"theme":{"primary":"#161616","primaryDark":"#000000","accent":"#161616","onPrimary":"#ffffff","onSurface":"#161616","surface":"#ffffff","surfaceAlt":"#f2f2f0","ink":"#161616","muted":"#6f6f6f","line":"#e6e6e4","radius":"0.875rem","maxWidth":"72rem"}}} />
      <Section2 data-eos-id="app/page.tsx#3" {...{"heading":"Why we started","paragraphs":["In 2019 we watched a reef we had dived for twenty years bleach white in a single summer.","We grew out of that summer: a marine-science team and a community of divers who refused to file the loss away as inevitable.","Today we run the largest community-led reef-restoration program on the east coast, and we publish every survival number, good or bad."],"quote":"A reef does not come back because you hope. It comes back because someone counts every coral.","attribution":"Dr Mara Ellis, founding marine ecologist","theme":{"primary":"#161616","primaryDark":"#000000","accent":"#161616","onPrimary":"#ffffff","onSurface":"#161616","surface":"#ffffff","surfaceAlt":"#f2f2f0","ink":"#161616","muted":"#6f6f6f","line":"#e6e6e4","radius":"0.875rem","maxWidth":"72rem"}}} />
      <Section3 data-eos-id="app/page.tsx#4" {...{"heading":"Ready to bring a reef back?","body":"Join the supporters funding the largest community-led reef restoration on the east coast.","ctaLabel":"Fund a reef","ctaHref":"#donate","theme":{"primary":"#161616","primaryDark":"#000000","accent":"#161616","onPrimary":"#ffffff","onSurface":"#161616","surface":"#ffffff","surfaceAlt":"#f2f2f0","ink":"#161616","muted":"#6f6f6f","line":"#e6e6e4","radius":"0.875rem","maxWidth":"72rem"}}} />
      <ContactFormSection data-eos-id="app/page.tsx#5" {...{
  "eyebrow": "Contact",
  "heading": "Get in touch",
  "intro": "Questions about our work, a partnership, or how to get involved? Send us a note and we will reply.",
  "submitLabel": "Send message",
  "namePlaceholder": "Your name",
  "emailPlaceholder": "you@example.com",
  "messagePlaceholder": "How can we help?",
  "theme": {
    "primary": "#161616",
    "primaryDark": "#000000",
    "accent": "#161616",
    "onPrimary": "#ffffff",
    "onSurface": "#161616",
    "surface": "#ffffff",
    "surfaceAlt": "#f2f2f0",
    "ink": "#161616",
    "muted": "#6f6f6f",
    "line": "#e6e6e4",
    "radius": "0.875rem",
    "maxWidth": "72rem"
  }
}} />
    </main>
  );
}
