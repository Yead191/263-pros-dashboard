import { useState } from 'react';
import NoteTab from '../../../components/shared/NoteTab';

export default function AboutPage() {
    const [conten, setContent] = useState('');
    return (
        <div className="">
            <NoteTab content={conten} handleContentChange={setContent} />
        </div>
    );
}
