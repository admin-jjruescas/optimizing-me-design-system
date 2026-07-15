**Dialog** — centered modal on a blurred navy scrim; closes on scrim click or the ✕.

```jsx
<Dialog open={open} onClose={()=>setOpen(false)} title="Book a call"
  footer={<><Button variant="ghost" onClick={close}>Cancel</Button><Button variant="primary">Confirm</Button></>}>
  Pick a time that works for you…
</Dialog>
```
