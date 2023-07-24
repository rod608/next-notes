async function getNote(note_id: string) {
    const response = await fetch(`http://127.0.0.1:8090/api/collections/notes/records/${note_id}`,
        { next: { revalidate: 10 } }  // ISR, similar to getStaticProps(). Regenerate after 10 seconds.
    );
    const data = await response.json();
    return data;
}

export default async function NotePage({ params }: any) {  // params accesses the dynamic route parameters
    const note = await getNote(params.id);

    return (
        <div>
            <h1>notes/{note.id}</h1>
            <div>
                <h3>{note.title}</h3>
                <h5>{note.content}</h5>
                <p>{note.created}</p>
            </div>
        </div>
    )
}