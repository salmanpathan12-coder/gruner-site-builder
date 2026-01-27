
# Solution Subpages - Complete Implementation Plan

## Overview

Building the 6 remaining solution subpages in the standalone HTML version. All pages follow the same template structure and use consistent styling from the existing CSS files.

---

## Pages to Create

| File | Title | Icon | Hero Image | Stat Badge |
|------|-------|------|------------|------------|
| `solutions/project-development.html` | End-to-End Project Development | FolderKanban | Pexels (3184465) | 100+ Projects |
| `solutions/engineering-construction.html` | World-Class EPC Services | HardHat | Pexels (159306) | 63+ Plants |
| `solutions/rd.html` | Innovation-Driven R&D Excellence | FlaskConical | Pexels (256381) | 20+ Patents |
| `solutions/cng-retail.html` | Modern CNG Retail Network | Fuel | Local (cng-retail-hero.jpg) | 25+ Stations |
| `solutions/bio-gas.html` | Sustainable Bio-Gas Technology | Leaf | Pexels (433308) | 1M+ Tons |
| `solutions/om.html` | Expert O&M Services | Wrench | Pexels (159306) | 99.5% Uptime |

---

## Common Template Structure

Each subpage follows this identical structure:

### Section 1: Hero
- White background with `pt-28 pb-20` padding
- Two-column grid (text left, image right)
- Gradient badge with page category
- Large heading with gradient text accent
- Description paragraph
- Two CTA buttons (primary gradient + secondary outline)
- Hero image with shadow
- Floating stat card positioned bottom-left

### Section 2: Features Grid
- Gray background (`bg-gray-50`)
- Section badge with "Our Capabilities/Services/Solutions"
- Heading with gradient text accent
- 4-column grid of feature items
- Each item: CheckCircle icon + feature text
- Scroll-triggered fade-up animation

### Section 3: Process/Applications/Services
- White background
- Centered heading with gradient text accent
- 4-column grid of cards
- Each card: gradient icon box + title + description
- Hover shadow effect

### Section 4: CTA
- Gray background (`bg-gray-50`)
- Centered heading with gradient text
- Description paragraph
- Single primary CTA button

---

## File Structure Adjustments

Since the subpages are in a `solutions/` subfolder, paths need adjustment:

```html
<!-- CSS paths (from solutions/ folder) -->
<link rel="stylesheet" href="../css/variables.css">
<link rel="stylesheet" href="../css/base.css">
<!-- etc. -->

<!-- Asset paths -->
<img src="../assets/images/cng-retail-hero.jpg">
<img src="../assets/logos/gruner-logo.png">

<!-- JS paths -->
<script src="../js/utils.js"></script>
<!-- etc. -->

<!-- Navigation links -->
<a href="../index.html">Home</a>
<a href="../about.html">About</a>
```

---

## SVG Icons to Inline

Each page uses Lucide icons converted to inline SVG:

| Icon Name | Used In |
|-----------|---------|
| FolderKanban | Project Development |
| FileText | Project Development (Feasibility) |
| MapPin | Project Development (Site Selection) |
| Users | Project Development (Stakeholder) |
| TrendingUp | Project Development (Execution) |
| HardHat | Engineering & Construction |
| Settings | Engineering & Construction (Design) |
| Wrench | Engineering & Construction, O&M |
| Shield | Engineering & Construction, O&M |
| Zap | Engineering & Construction, Bio-Gas |
| FlaskConical | R&D |
| Microscope | R&D |
| Lightbulb | R&D |
| BarChart3 | R&D |
| Target | R&D |
| Fuel | CNG Retail |
| MapPin | CNG Retail |
| Truck | CNG Retail |
| Clock | CNG Retail, O&M |
| Leaf | Bio-Gas |
| Recycle | Bio-Gas |
| Factory | Bio-Gas |
| TreePine | Bio-Gas |
| Activity | O&M |
| CheckCircle2 | All pages (feature lists) |
| ArrowRight | All pages (CTA buttons) |

---

## Page-Specific Content

### 1. Project Development (project-development.html)

**Features:**
- Comprehensive feasibility studies
- Site selection and assessment
- Environmental impact analysis
- Regulatory compliance support
- Financial modeling and ROI projections
- Stakeholder engagement
- Project timeline planning
- Risk assessment and mitigation

**Process Steps:**
- Feasibility Analysis (FileText)
- Site Selection (MapPin)
- Stakeholder Alignment (Users)
- Project Execution (TrendingUp)

---

### 2. Engineering & Construction (engineering-construction.html)

**Features:**
- Turnkey EPC solutions
- Civil and structural engineering
- Mechanical system integration
- Electrical and instrumentation
- Quality assurance protocols
- Safety management systems
- Project commissioning
- Performance testing

**Capabilities:**
- Design Engineering (Settings)
- Construction Management (HardHat)
- Quality Control (Shield)
- Commissioning (Zap)

---

### 3. Research & Development (rd.html)

**Features:**
- Process optimization research
- Feedstock characterization
- Microbial culture development
- Biogas yield enhancement
- Technology innovation
- Pilot plant testing
- Performance benchmarking
- Knowledge transfer programs

**Research Areas:**
- Microbiology Research (Microscope)
- Process Innovation (Lightbulb)
- Data Analytics (BarChart3)
- Performance Optimization (Target)

---

### 4. CNG Retail (cng-retail.html)

**Features:**
- Retail outlet development
- Dispensing equipment supply
- Safety compliance systems
- 24/7 operations support
- Payment systems integration
- Customer management
- Inventory management
- Quality certification

**Benefits:**
- Strategic Locations (MapPin)
- Fleet Solutions (Truck)
- 24/7 Operations (Clock)
- Safety Standards (Shield)

---

### 5. Bio-Gas (bio-gas.html)

**Features:**
- Agricultural waste processing
- Municipal solid waste treatment
- Industrial organic waste
- Biogas purification systems
- Digestate management
- Carbon credit generation
- Grid injection capability
- Energy self-sufficiency

**Applications:**
- Waste to Energy (Recycle)
- Industrial Applications (Factory)
- Power Generation (Zap)
- Carbon Neutrality (TreePine)

---

### 6. O&M (om.html)

**Features:**
- 24/7 plant monitoring
- Preventive maintenance programs
- Performance optimization
- Spare parts management
- Emergency response services
- Operator training
- Compliance management
- Performance reporting

**Services:**
- Real-Time Monitoring (Activity)
- Preventive Maintenance (Clock)
- Safety Compliance (Shield)
- Performance Optimization (Settings)

**Additional: Stats bar in hero**
- 99.5% Plant Uptime
- 24/7 Monitoring
- 63+ Plants Managed

---

## Implementation Order

1. Create `static-html/solutions/` directory structure
2. Build `project-development.html`
3. Build `engineering-construction.html`
4. Build `rd.html`
5. Build `cng-retail.html`
6. Build `bio-gas.html`
7. Build `om.html`

---

## Technical Notes

### Path Prefix for Subpages

All paths in solution subpages use `../` prefix:
- CSS: `../css/variables.css`
- JS: `../js/utils.js`
- Images: `../assets/images/`
- Logos: `../assets/logos/`
- Navigation: `../index.html`, `../about.html`, etc.

### Scroll Animations

All pages include the standard animation classes:
- `.scroll-fade-up` on feature cards (with staggered delays)
- `.scroll-fade-up` on process/benefit cards
- `.in-view` class added by IntersectionObserver

### Responsive Behavior

- Hero: 2-column on desktop, stacked on mobile
- Feature grid: 4-col desktop, 2-col tablet, 1-col mobile
- Process cards: 4-col desktop, 2-col tablet, 1-col mobile

---

## Deliverables

| File | Status |
|------|--------|
| `solutions/project-development.html` | To create |
| `solutions/engineering-construction.html` | To create |
| `solutions/rd.html` | To create |
| `solutions/cng-retail.html` | To create |
| `solutions/bio-gas.html` | To create |
| `solutions/om.html` | To create |

Total: 6 new HTML files completing the standalone version
