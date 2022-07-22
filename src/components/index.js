import React, { Children } from 'react'

const layout = ({ Children }) => { 
    return (
      <section>
        <header>header</header>
        {Children}
      </section>
    );
}

export default layout;
