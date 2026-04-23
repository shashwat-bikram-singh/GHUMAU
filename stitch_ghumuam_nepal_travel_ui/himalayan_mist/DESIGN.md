# Design System Document: The Alpine Sanctuary

## 1. Overview & Creative North Star
**Creative North Star: The Alpine Sanctuary**
This design system is not a utility; it is an atmospheric experience. Inspired by the stillness of the Himalayas and the crystalline depths of Nepal's high-altitude lakes, the system follows a philosophy of **Atmospheric Editorial**. We move away from the rigid, boxed-in layouts of traditional travel booking sites and toward a fluid, layered, and serene digital environment.

To break the "template" look, we utilize:
*   **Intentional Asymmetry:** Overlapping imagery and typography to create a sense of movement.
*   **The Breath of the Mountains:** Ample whitespace (negative space) that mimics the vastness of the Annapurna range.
*   **Tonal Depth:** Replacing harsh lines with shifts in light and color to define space.

---

## 2. Colors & Surface Philosophy
The palette is a sophisticated interplay between the cool depths of the `primary` sky blues and the grounding warmth of the `secondary` forest greens.

### The "No-Line" Rule
**Explicit Instruction:** You are prohibited from using 1px solid borders to define sections or containers. Physical boundaries in this system are created through:
1.  **Background Shifts:** Placing a `surface_container_low` section against a `surface` background.
2.  **Tonal Transitions:** Using subtle gradients to guide the eye from one content block to the next.

### Surface Hierarchy & Nesting
Treat the UI as a series of physical layers—like stacked sheets of frosted glass or fine handmade paper.
*   **Base:** `surface` (#f8f9ff) for the primary canvas.
*   **Layer 1 (The Meadow):** `surface_container_low` (#eff4ff) for subtle sectioning.
*   **Layer 2 (The Summit):** `surface_container_lowest` (#ffffff) for high-focus cards that need to "pop" forward.

### Glass & Gradient (The Soul of the System)
*   **Signature Textures:** For primary CTAs and high-impact Hero backgrounds, use a linear gradient from `primary` (#006194) to `primary_container` (#007bb9). This mimics the transition of light on a mountain face.
*   **Glassmorphism:** For floating navigation bars or overlays, use `surface` with a 70% opacity and a `20px` backdrop-blur. This ensures the high-quality imagery of Nepal is never fully obscured, maintaining a sense of place.

---

## 3. Typography: The Editorial Voice
We use a high-contrast typography scale to create an authoritative yet welcoming voice.

*   **Display & Headlines (Plus Jakarta Sans):** This is our "Mountaintop" font. It is modern and geometric. Use `display-lg` and `headline-lg` with generous tracking (-0.02em) to create a premium, editorial feel. 
*   **Body & Labels (Manrope):** Our "Guide" font. Manrope offers exceptional legibility. `body-lg` is the workhorse for storytelling, while `label-md` is reserved for technical details like altitude or price.
*   **Hierarchy Note:** Always pair a `display-md` headline with a `body-lg` subtext. The extreme difference in scale creates the "Airbnb-luxury" aesthetic.

---

## 4. Elevation & Depth
In this system, depth is felt, not seen.

### The Layering Principle
Do not use shadows to create hierarchy by default. Instead, use **Tonal Layering**. Place a `surface_container_highest` card on a `surface` background to create a "soft lift."

### Ambient Shadows
When a component must float (e.g., a "Book Now" sticky bar), use **Ambient Shadows**:
*   **Shadow Color:** A tinted version of `on_surface` (at 6% opacity).
*   **Blur:** High diffusion (30px - 50px).
*   **Offset:** Small Y-axis offset (4px - 8px).
*   **Result:** The element feels like it is levitating in a cloud of light, not casting a heavy shadow on a wall.

### The "Ghost Border" Fallback
If accessibility requires a container definition (e.g., in high-contrast modes), use a **Ghost Border**: `outline_variant` (#bfc7d2) at **15% opacity**. Never use a 100% opaque border.

---

## 5. Components

### Cards & Lists
*   **The Borderless Card:** Use `xl` (1.5rem) rounded corners. Forbid the use of divider lines. Separate list items using `1.5rem` of vertical whitespace or by alternating background tones between `surface_container_low` and `surface_container_lowest`.
*   **Imagery Focus:** Images in cards should use a "Ken Burns" subtle zoom effect on hover to emphasize the premium nature of the photography.

### Buttons
*   **Primary:** A gradient-filled container (`primary` to `primary_container`) with `full` (9999px) rounded corners. Text is `on_primary`.
*   **Secondary:** `surface_container_high` background with `primary` text. No border.
*   **Tertiary:** Transparent background with `primary` text and a subtle `surface_variant` hover state.

### Input Fields
*   **State Styling:** Use `surface_container_low` for the default state. Upon focus, shift to `surface_container_lowest` and apply a 2px "Ghost Border" using `surface_tint`.
*   **Typography:** Labels must use `label-md` in `on_surface_variant`.

### Specialty Component: The "Mist" Navigation
A top-tier navigation bar that uses a 40px backdrop-blur and a subtle bottom-to-top gradient (transparent to `surface`). It should feel like it's emerging from the top of the screen like mountain mist.

---

## 6. Do’s and Don’ts

### Do:
*   **Do** use asymmetrical margins. A photo might be 24px from the left, but its caption might be 64px from the left to create a rhythmic "staggered" look.
*   **Do** prioritize high-resolution, "Quiet Luxury" imagery: empty landscapes, detailed textures of prayer flags, or still lake reflections.
*   **Do** use the `xl` (1.5rem) rounding scale for all major containers to maintain the "Soft Minimalist" feel.

### Don’t:
*   **Don't** use black (#000000). Use `on_background` (#0b1c30) for all text to keep the interface feeling "calm" rather than "stark."
*   **Don't** use standard icons. Use thin-stroke (1px or 1.5px) custom iconography that matches the weight of the Manrope typeface.
*   **Don't** crowd the interface. If a screen feels "full," remove 20% of the content or double the padding. Premium is defined by what you leave out.

---

## 7. Token Reference Summary
*   **Primary Action:** `primary` (#006194)
*   **Success/Nature:** `secondary` (#516445)
*   **Surface Base:** `surface` (#f8f9ff)
*   **Card Background:** `surface_container_lowest` (#ffffff)
*   **Border Fallback:** `outline_variant` (#bfc7d2) @ 15% opacity
*   **Rounding:** `xl` (1.5rem) for cards; `full` for buttons.