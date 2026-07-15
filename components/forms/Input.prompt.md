**Input** — labeled text field with calm orange focus ring, optional leading icon, and hint/error text.

```jsx
<Input label="Email" placeholder="you@work.com" iconStart={<MailIcon/>} />
<Input label="Name" error="Required" />
```

- Pass native input props (`type`, `value`, `onChange`, `placeholder`).
