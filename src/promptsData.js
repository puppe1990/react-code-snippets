import React from 'react';
import PropTypes from 'prop-types';

const categories = [
  { id: 1, name: 'Animation' },
  { id: 2, name: 'Accessibility' },
  { id: 3, name: 'Forms' },
  { id: 4, name: 'Grids and Layouts' },
  { id: 5, name: 'CSS Tricks' },
  { id: 6, name: 'Styling' },
  { id: 7, name: 'Hooks' },
  { id: 8, name: 'Navigation' },
  { id: 9, name: 'State Management' },
  { id: 10, name:'Performance Optimization' },
];

const snippets = [
  { 
    id: 1, 
    category: 'Animation', 
    title: 'Fade In Animation', 
    description: 'A simple CSS animation to fade in an element', 
    code: `
    import React, { useRef, useEffect } from 'react';
    import './styles.css';
  
    function FadeInAnimation() {
      const ref = useRef(null);
  
      useEffect(() => {
        const node = ref.current;
        node.classList.add('fade-in-animation');
      }, []);
  
      return <div ref={ref}>I will fade in!</div>;
    }
    `
  },
  {
    id: 2,
    category: 'Animation',
    title: 'Bounce Animation',
    description: 'A CSS animation to make an element bounce up and down',
    code: `
    import React from 'react';
    import './styles.css';
  
    function BounceAnimation() {
      return <div className="bounce-animation">I will bounce!</div>;
    }
    `
  },
  {
    id: 3,
    category: 'Animation',
    title: 'Spin Animation',
    description: 'A CSS animation to make an element spin',
    code: `
    import React from 'react';
    import './styles.css';
  
    function SpinAnimation() {
      return <div className="spin-animation">I will spin!</div>;
    }
    `
  },{
    id: 1,
    category: 'Accessibility',
    title: 'Screen Reader Only Text',
    description: 'A component that shows text only to screen readers, but hides it visually',
    code: `
    import React from 'react';
  
    function ScreenReaderOnlyText({ children }) {
      return (
        <span style={{ position: 'absolute', left: '-10000px', top: 'auto', width: '1px', height: '1px', overflow: 'hidden' }}>
          {children}
        </span>
      );
    }
    `
  },
  {
    id: 2,
    category: 'Accessibility',
    title: 'Skip Navigation Link',
    description: 'A link that allows keyboard-only users to skip to the main content of a page',
    code: `
    import React from 'react';
  
    function SkipNavigationLink() {
      return (
        <a href="#main-content" style={{ position: 'absolute', left: '-10000px', top: 'auto', width: '1px', height: '1px', overflow: 'hidden' }}>
          Skip to main content
        </a>
      );
    }
    `
  },
  {
    id: 3,
    category: 'Accessibility',
    title: 'Aria Labelled By',
    description: 'An example of how to use the "aria-labelledby" attribute to associate a label with an input field',
    code: `
    import React from 'react';
  
    function AriaLabelledByExample() {
      return (
        <>
          <label id="input-label">Input field:</label>
          <input type="text" aria-labelledby="input-label" />
        </>
      );
    }
    `
  },
  {
    id: 1,
    category: 'Forms',
    title: 'Input with Placeholder Text',
    description: 'An input field with placeholder text',
    code: `
    import React from 'react';
  
    function InputWithPlaceholder() {
      return <input type="text" placeholder="Enter your name" />;
    }
    `
  },
  {
    id: 1,
    category: 'Grids and Layouts',
    title: 'Responsive Two-Column Grid',
    description: 'A responsive two-column grid using CSS Grid',
    code: `
    import React from 'react';
    import './styles.css';
  
    function ResponsiveTwoColumnGrid({ children }) {
      return (
        <div className="grid-container">
          {children}
        </div>
      );
    }
  
    // styles.css
    .grid-container {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
      grid-gap: 1rem;
    }
    `
  },
  {
    id: 1,
    category: 'CSS Tricks',
    title: 'Box Shadow',
    description: 'A simple example of a box shadow effect on an element',
    code: `
    import React from 'react';
    import './styles.css';
  
    function BoxShadowExample() {
      return <div className="box-shadow">I have a box shadow!</div>;
    }
  
    // styles.css
    .box-shadow {
      box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
    }
    `
  },
  {
    id: 1,
    category: 'Styling',
    title: 'Inline Styles',
    description: 'An example of how to use inline styles to style an element',
    code: `
    import React from 'react';
  
    function InlineStylesExample() {
      const styles = { color: 'red', backgroundColor: 'yellow' };
  
      return <div style={styles}>I have inline styles!</div>;
    }
    `
  },
  {
    id: 1,
    category: 'Hooks',
    title: 'UseState Hook',
    description: 'An example of how to use the useState hook to manage state in a functional component',
    code: `
    import React, { useState } from 'react';
  
    function UseStateExample() {
      const [count, setCount] = useState(0);
  
      function handleClick() {
        setCount(count + 1);
      }
  
      return (
        <div>
          <p>You clicked the button {count} times.</p>
          <button onClick={handleClick}>Click me!</button>
        </div>
      );
    }
    `
  },
  {
    id: 1,
    category: 'Navigation',
    title: 'Link to External Site',
    description: 'An example of a link that takes the user to an external website',
    code: `
    import React from 'react';
  
    function ExternalLink() {
      return <a href="https://www.example.com" target="_blank" rel="noopener noreferrer">Go to example.com</a>;
    }
    `
  },
  {
    id: 1,
    category: 'State Management',
    title: 'UseReducer Hook',
    description: 'An example of how to use the useReducer hook to manage state in a complex application',
    code: `
    import React, { useReducer } from 'react';
  
    const initialState = { count: 0 };
  
    function reducer(state, action) {
      switch (action.type) {
        case 'increment':
          return { count: state.count + 1 };
        case 'decrement':
          return { count: state.count - 1 };
        default:
          throw new Error();
      }
    }
  
    function UseReducerExample() {
      const [state, dispatch] = useReducer(reducer, initialState);
  
      return (
        <div>
          <p>You clicked the button {state.count} times.</p>
          <button onClick={() => dispatch({ type: 'increment' })}>Increment</button>
          <button onClick={() => dispatch({ type: 'decrement' })}>Decrement</button>
        </div>
      );
    }
    `
  },  
  {
    id: 1,
    category: 'Performance Optimization',
    title: 'Memoization',
    description: 'An example of how to use memoization to optimize a component that only needs to rerender when its props change',
    code: `
    import React, { useMemo } from 'react';
  
    function MemoizationExample({ data }) {
      const memoizedData = useMemo(() => {
        return processData(data);
      }, [data]);
  
      return <div>{memoizedData}</div>;
    }
    `
  }
  
  

  
  
  
  
  
  
  
  
];

const Snippets = ({ list, setShow }) => {
  return (
    <div>
      {/* Category buttons */}
      <div>
        {categories.map((category) => (
          <button key={category.id} onClick={() => setShow(category.name)}>
            {category.name}
          </button>
        ))}
      </div>
      {/* Prompt list */}
      <div>
    {list.map((prompt) => (
      <div key={prompt.id}>
        <h3>{prompt.title}</h3>
        <p>{prompt.description}</p>
      </div>
        ))}
      </div>
    </div>

  );
};

Snippets.propTypes = {
  list: PropTypes.array.isRequired,
  setShow: PropTypes.func.isRequired,
};

export { categories, snippets, Snippets };
