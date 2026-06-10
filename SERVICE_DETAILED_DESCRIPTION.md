# Service Detailed Description — Client Integration Guide

Admin panel me **Detailed Description** ab rich text editor se save hoti hai (bold, spacing, lists).  
Database me ye **HTML string** ke form me store hoti hai.

Client website par **plain text ki jagah HTML render** karna zaroori hai — warna bold aur spacing nahi dikhegi.

---

## APIs (Client / Public)

Base URL example:

```
http://localhost:5000/api/services
```

Production me apna backend URL use karein.

### 1. Services list (cards / listing page)

```
GET /api/services/public
```

**Auth:** Not required

**Response:**

```json
{
  "services": [
    {
      "_id": "665f1a2b3c4d5e6f7a8b9c0d",
      "title": "Service Title",
      "description": "Short description",
      "masterImage": "https://..."
    }
  ]
}
```

> **Note:** Is endpoint me `detailedDescription` **nahi** aati. Sirf listing ke liye use karein.

---

### 2. Single service detail (detail page)

```
GET /api/services/public/:id
```

**Auth:** Not required

**Example:**

```
GET /api/services/public/665f1a2b3c4d5e6f7a8b9c0d
```

**Response:**

```json
{
  "data": {
    "_id": "665f1a2b3c4d5e6f7a8b9c0d",
    "title": "Service Title",
    "description": "Short description",
    "detailedDescription": "<p>First paragraph with <strong>bold text</strong>.</p><p>Second paragraph with spacing.</p><ul><li>Bullet item</li></ul>",
    "masterImage": "https://...",
    "visible": true,
    "specialist": {
      "_id": "...",
      "name": "Dr. Example",
      "role": "Specialist",
      "image": { "url": "..." }
    },
    "createdAt": "2025-01-01T00:00:00.000Z",
    "updatedAt": "2025-01-01T00:00:00.000Z"
  }
}
```

Detail page ke liye **`detailedDescription`** isi API se aati hai.

---

## Client Side — Kya Change Karna Hai?

### Problem (purana tareeqa)

Agar aise dikhate ho:

```jsx
<p>{service.detailedDescription}</p>
```

To:
- `<p>`, `<strong>` tags **text** ki tarah dikhenge
- Line breaks / spacing **collapse** ho jati hai
- Bold kaam nahi karega

### Solution (naya tareeqa)

HTML render karein:

#### React

```jsx
function ServiceDetail({ service }) {
  return (
    <section>
      <h1>{service.title}</h1>
      <p>{service.description}</p>

      <div
        className="rich-text-content"
        dangerouslySetInnerHTML={{ __html: service.detailedDescription }}
      />
    </section>
  );
}
```

#### Fetch example

```js
const API_BASE = "http://localhost:5000"; // ya env variable

async function getServiceDetail(id) {
  const res = await fetch(`${API_BASE}/api/services/public/${id}`);
  if (!res.ok) throw new Error("Service not found");
  const json = await res.json();
  return json.data;
}
```

#### Next.js (App Router) example

```jsx
export default async function ServicePage({ params }) {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/api/services/public/${params.id}`,
    { next: { revalidate: 60 } }
  );
  const { data: service } = await res.json();

  return (
    <div
      className="rich-text-content"
      dangerouslySetInnerHTML={{ __html: service.detailedDescription }}
    />
  );
}
```

#### Plain HTML + JavaScript

```html
<div id="service-detail" class="rich-text-content"></div>

<script>
  fetch("http://localhost:5000/api/services/public/SERVICE_ID")
    .then((res) => res.json())
    .then(({ data }) => {
      document.getElementById("service-detail").innerHTML =
        data.detailedDescription;
    });
</script>
```

---

## CSS (Spacing + Bold ke liye)

Ye classes admin panel me bhi hain (`fincan-admin-panel-fe/src/index.css`). Client par bhi add karein:

```css
.rich-text-content p {
  margin: 0 0 0.75rem;
}

.rich-text-content p:last-child {
  margin-bottom: 0;
}

.rich-text-content ul {
  margin: 0 0 0.75rem 1.25rem;
  padding: 0;
  list-style: disc;
}

.rich-text-content strong {
  font-weight: 700;
}

.rich-text-content em {
  font-style: italic;
}
```

Tailwind use karte ho to `prose` class bhi option hai, lekin upar wali classes exact admin preview jaisi spacing deti hain.

---

## Admin Panel — Kya Save Hota Hai?

| Admin me action      | Database value example                          |
|----------------------|-------------------------------------------------|
| Bold text            | `<strong>text</strong>`                         |
| New line (Enter)     | `<p>...</p>` ya `<br>`                          |
| Bullet list          | `<ul><li>item</li></ul>`                        |
| Purani plain text    | Editor load par auto `<p>` paragraphs me convert |

**Backend change ki zaroorat nahi** — `detailedDescription` pehle se `String` field hai, HTML accept karti hai.

---

## Purani Services (Backward Compatible)

Jo services pehle plain text me save hain, wo bhi kaam karengi:

- Admin editor unhe paragraphs me convert karta hai
- Client par `dangerouslySetInnerHTML` / `innerHTML` se plain text bhi dikhega (bina formatting ke)

Agar detail page par formatting chahiye, service ko admin se **ek baar open karke Save** kar dein — HTML format me update ho jayegi.

---

## Checklist (Client Developer)

- [ ] Listing: `GET /api/services/public`
- [ ] Detail page: `GET /api/services/public/:id`
- [ ] `detailedDescription` ko HTML ke taur par render karein (plain `{text}` nahi)
- [ ] `.rich-text-content` CSS add karein
- [ ] Detail page par test karein: bold, paragraph gap, bullet list

---

## Optional: HTML Sanitization

Content sirf trusted admin se aati hai, lekin extra safety ke liye client par sanitize kar sakte ho:

```bash
npm install dompurify
```

```jsx
import DOMPurify from "dompurify";

<div
  className="rich-text-content"
  dangerouslySetInnerHTML={{
    __html: DOMPurify.sanitize(service.detailedDescription),
  }}
/>
```

---

## Admin APIs (Reference Only — Client ko nahi chahiye)

| Method | Endpoint                         | Auth   | Use              |
|--------|----------------------------------|--------|------------------|
| GET    | `/api/services`                  | Token  | Admin list       |
| POST   | `/api/services`                  | Token  | Create           |
| PUT    | `/api/services/:id`              | Token  | Update           |
| DELETE | `/api/services/:id`              | Token  | Delete           |
| PATCH  | `/api/services/:id/toggle-visibility` | Token | Show/hide   |

Client ke liye sirf **`/api/services/public`** aur **`/api/services/public/:id`** kaafi hain.
