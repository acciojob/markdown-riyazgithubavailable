import React, { useState, useEffect } from 'react';


const  App = () => {
  const [markdown, setMarkdown] = useState('');
  

  useEffect(() => {
     handleMarkdownChange()
  }, [markdown]);

  
  const handleMarkdownChange = (event) => {
    if (event && event.target) {
    setMarkdown(event.target.value);
    }
  };
  return (
    <div className="app">
      <div className="textarea">
        <textarea
          value={markdown}
          onChange={handleMarkdownChange}
          placeholder=" # Write your Markdown here..."
        />
      </div>
      <div className="preview">
       { markdown && (
        <div className='loading'>
            <h1>{markdown}</h1>
        </div>
       )
       }
      </div>
    </div>
  );
}

export default App;
