
```vue
class="flex items-center gap-3 px-4 py-3 bg-gray-100 rounded-xl border hover:bg-gray-200 transition text-lg"
```

text-sm → small
text-lg → large

px-n = padding-left / padding-right
py-n = padding-top / padding-bottom

w = width = width: xem;
mr-4 = margin-right: 1rem (16px)
> 0~96
mt = margin top
bg-color = back ground = background-color: #fff;
rounded-lg = border-radius: 0.5rem;
z-n = z-index: n; = place front
text-gray-n = gray-50 〜 gray-950

justify-between = justify-content: space-between;

whitespace-nowrap = white-space: nowrap; = no line change 

### SVG 
```vue
<svg
  class="w-6 h-6 transform transition-transform"
  :class="{ 'rotate-180': open }"
  fill="none"
  stroke="currentColor"
  viewBox="0 0 24 24"
>
```

SVG = Scalable Vector Graphics

### Path

```vue
<path
  stroke-linecap="round"
  stroke-linejoin="round"
  stroke-width="2"
  d="M19 9l-7 7-7-7"
/>
```
Move(19,9) → (12,16)=(-7,7) → (5,9)=(7,-7) = v mark


### Binding Syntax
```vue
:class="..."
```

```vue
['a', 'b', 'c'] → class="a b c"
```

## Tailwind

`class="absolute"`

## CSS

`<ul class = "list-none">`


`right-0`
Place left of parent(※Parent: relative、Child: absolute)