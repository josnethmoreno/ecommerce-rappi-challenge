export interface Category {
  id: number,
  name: string,
	icon: string,
  sublevels?: Category[]
}