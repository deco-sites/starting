---
description: Learn best practices for the Menu component on ecommerce sites
---

Dropdown menus are very common in navigation menus for desktops in ecommerce.
Examples are found in the desktop version of
[starter fashion](https://fashion.deco.site/ "https://fashion.deco.site/").

![c4786b91-aa1b-4f17-8218-51799f0ac16a](https://user-images.githubusercontent.com/18706156/224515146-97d1afe1-0521-4346-ae3d-4058ee029d8f.gif)

Developers may be tempted to use JavaScript, more specifically `onmouseover`
function, to add this kind of interactivity. However, this behavior is possible
to be replicated only with HTML and CSS, delivering a optimal performance for
mobile and desktop devices.

The big secret of this type of menu is the use of the `group` class from
[twind](https://twind.style/). With it, we managed to make the menu visible
depending on the element being overlaid.

For example, suppose the following code:

```tsx
function Menu() {
  return (
    <div class="group">
      Menu Item 1
      <ul class="hidden group-hover:block">
        <li>Subsection 1</li>
        <li>Subsection 2</li>
        <li>Subsection 3</li>
      </ul>
    </div>
  );
}
```

In this example, the `div` tag has the `group` class. This means that we can
react to events that happen on this `div`. In this case, we react to hover with
the `group-hover:` selector, changing the submenu that was initially `hidden` to
`block`, and making it appear.\
\
See this code in action at
[recipe repository](https://github.com/deco-sites/recipes/blob/main/components/dropdown-menu.tsx)
and in production at [Fashion](https://github.com/deco-sites/fashion)
