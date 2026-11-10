import React from "react";
import "./component-without-js.css";

function ComponentWithoutJs() {
  return (
    <div className="p-7">
      {/* <div className='cs-wrapper'>
            <input className='cs-trigger' type='checkbox' id='trigger' />
            <label className='cs-trigger-label' htmlFor='trigger'>
                <span>selet your framework</span>
                <span>v</span>
            </label>
            <div className='cs-options' role='listbox'>
                <div className='cs-option' role='option'><input className='cs-option-trigger' type="radio" id='option-trigger-react' value="react" name='framework' /><label className='cs-option-trigger-label' htmlFor='option-trigger-react'>React</label><span>selected</span></div>
                <div className='cs-option' role='option'><input className='cs-option-trigger' type="radio" id='option-trigger-vue' value="vue" name='framework' /><label className='cs-option-trigger-label' htmlFor='option-trigger-vue'>Vue</label><span>selected</span></div>
                <div className='cs-option' role='option'><input className='cs-option-trigger' type="radio" id='option-trigger-angular' value="angular" name='framework' /><label className='cs-option-trigger-label' htmlFor='option-trigger-angular'>Angular</label><span>selected</span></div>
                <div className='cs-option' role='option'><input className='cs-option-trigger' type="radio" id='option-trigger-svelte' value="Svelte" name='framework' /><label className='cs-option-trigger-label' htmlFor='option-trigger-svelte'>Svelte</label><span>selected</span> </div>
            </div>
        </div> */}

      {/* accordion */}
      <div>
        <div className="header">
          <input
            className="header-trigger"
            type="radio"
            id="head-1"
            name="framework"
            value="react"
          />
          <label className="header-trigger-label" htmlFor="head-1">
            <span>React</span> <span>v</span>
          </label>
        </div>
        <div className="content">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusamus
          odio eaque recusandae sequi doloribus ut exercitationem, aut fugit,
          illum nostrum aliquid consectetur eveniet? Corporis voluptatem
          necessitatibus, eum obcaecati a blanditiis?
        </div>
        <div className="header">
          <input
            className="header-trigger"
            type="radio"
            id="head-2"
            name="framework"
            value="vue"
          />
          <label className="header-trigger-label" htmlFor="head-2">
            <span>Vue</span> <span>v</span>
          </label>
        </div>
        <div className="content">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusamus
          odio eaque recusandae sequi doloribus ut exercitationem, aut fugit,
          illum nostrum aliquid consectetur eveniet? Corporis voluptatem
          necessitatibus, eum obcaecati a blanditiis?
        </div>
        <div className="header">
          <input
            className="header-trigger"
            type="radio"
            id="head-3"
            name="framework"
            value="Angular"
          />
          <label className="header-trigger-label" htmlFor="head-3">
            <span>Angular</span> <span>v</span>
          </label>
        </div>
        <div className="content">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusamus
          odio eaque recusandae sequi doloribus ut exercitationem, aut fugit,
          illum nostrum aliquid consectetur eveniet? Corporis voluptatem
          necessitatibus, eum obcaecati a blanditiis?
        </div>
        <div className="header">
          <input
            className="header-trigger"
            type="radio"
            id="head-4"
            name="framework"
            value="svelte"
          />
          <label className="header-trigger-label" htmlFor="head-4">
            <span>Svelte</span> <span>v</span>
          </label>
        </div>
        <div className="content">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusamus
          odio eaque recusandae sequi doloribus ut exercitationem, aut fugit,
          illum nostrum aliquid consectetur eveniet? Corporis voluptatem
          necessitatibus, eum obcaecati a blanditiis?
        </div>
      </div>
    </div>
  );
}

export default ComponentWithoutJs;
