
export function Danish(input) {
    return String(input)

    .trim()
    .toLowerCase()

    .replaceAll("å", "aa")
    .replaceAll("æ", "ae")
    .replaceAll("ø", "oe")
}