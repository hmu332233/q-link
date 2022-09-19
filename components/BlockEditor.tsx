import React, { useId, useRef, useEffect } from 'react';
import EditorJS from '@editorjs/editorjs';
import Header from '@editorjs/header';
import List from '@editorjs/list';

type Props = {};

function BlockEditor({}: Props) {
  const holder = useId();
  const editor = useRef<EditorJS | null>(null);

  useEffect(() => {
    if (!editor.current) {
      editor.current = new EditorJS({
        holder,
        placeholder: '문제 내용을 작성해주세요!',
        tools: {
          header: Header,
          list: List,
        },
        autofocus: true,
      });
    }
    return () => {
      if (editor.current && editor.current.destroy) {
        editor.current.destroy();
      }
    };
  }, []);

  return <div id={holder} className="w-full" />;
}

export default BlockEditor;
