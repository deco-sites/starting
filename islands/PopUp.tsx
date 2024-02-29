import Component from "$store/components/camp/PopUp/PopUp.tsx"
import type { Props } from "$store/components/camp/PopUp/PopUp.tsx"

export default function Island({ buttonLabel, items, theme ="dark"}: Omit<Props, "@Page"> & { theme?: "dark" | "ligth" },) {
    return <Component buttonLabel={buttonLabel} items={items} theme={theme} />
}