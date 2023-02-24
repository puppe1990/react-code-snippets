import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { FaCopy } from 'react-icons/fa';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { darcula } from 'react-syntax-highlighter/dist/esm/styles/prism';

import { snippets } from './promptsData';

const Prompts = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredPrompts = snippets.filter((prompt) =>
    prompt.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const promptCategories = [
    'All',
    'Animation',
    'Accessibility',
    'Forms',
    'Grids and Layouts',
    'CSS Tricks',
    'Styling',
    'Hooks',
    'Navigation',
    'State Management',
    'Performance Optimization',
  ];

  const [activeCategory, setActiveCategory] = useState(promptCategories[0]);

  const handleCategoryClick = (category) => {
    setActiveCategory(category);
  };

  return (
    <div className="container my-4">
      <h1 className="text-center mb-4">React code snippets</h1>
      <div className="row mb-4">
        <div className="col-12 col-md-6 mb-2 mb-md-0">
          <input
            type="text"
            className="form-control"
            placeholder="Search for snippets..."
            value={searchTerm}
            onChange={handleChange}
          />
        </div>
        <div className="col-12 col-md-6 d-flex justify-content-end">
          {filteredPrompts.length > 0 && (
            <p className="m-0">Showing {filteredPrompts.length} results</p>
          )}
        </div>
      </div>
      <div className="row">
        <div className="col-12 col-md-3 mb-3">
          <div className="list-group">
            {promptCategories.map((category) => (
              <button
                key={category}
                className={`list-group-item list-group-item-action ${
                  activeCategory === category ? 'active' : ''
                }`}
                onClick={() => handleCategoryClick(category)}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
        <div className="col-12 col-md-9">
          {filteredPrompts.length > 0 ? (
            <div>
              {filteredPrompts
                .filter((prompt) =>
                  activeCategory === 'All'
                    ? true
                    : prompt.category === activeCategory
                )
                .map((prompt) => (
                  <div key={prompt.id} className="mb-3">
                    <div className="card h-100">
                      <div className="card-body">
                        <h5 className="card-title">{prompt.title}</h5>
                        <p className="card-text">{prompt.description}</p>
                        <SyntaxHighlighter language="javascript" style={darcula}>
                          {prompt.code}
                        </SyntaxHighlighter>
                      </div>
                      <div className="card-footer d-flex justify-content-end">
                        <CopyToClipboard text={prompt.code}>
                          <button className="btn btn-outline-secondary">
                            <FaCopy />
                          </button>
                        </CopyToClipboard>
                      </div>
                    </div>
                  </div>
                ))}
            </div>
          ) : (
            <p>No snippets found.</p>
          )}
        </div>

      </div>
    </div>
  );
};

export default Prompts;
