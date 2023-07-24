import Link from 'next/link'

export default function Note({ note }: any) {
    const { id, title, content, created } = note || {};
  
    return (
      <Link href={`/notes/${id}`}>
        <div>
          <h2>{title}</h2>
          <h2>{content}</h2>
          <p>{created}</p>
        </div>
      </Link>
    );
  }