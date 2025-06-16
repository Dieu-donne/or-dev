import React from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm     from 'remark-gfm';
import rehypeRaw     from 'rehype-raw';

export const RichText = ({ markdown }) => (
  <ReactMarkdown
    children={markdown}
    remarkPlugins={[remarkGfm]}
    rehypePlugins={[rehypeRaw]}
    components={{
      a: ({ node, ...props }) => (
        <a
          {...props}
          style={{
            color: '#000',            // black
            textDecoration: 'underline',
          }}
        />
      ),
    }}
  />
);