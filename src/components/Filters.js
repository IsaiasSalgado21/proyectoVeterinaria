import React from 'react';

const Filters = () => {
  return (
    <div className="filters">
      <input type="text" placeholder="Search..." className="search-input" />
      <select className="filter-select">
        <option value="">All Species</option>
        <option value="dog">Dog</option>
        <option value="cat">Cat</option>
        <option value="other">Other</option>
      </select>
      <select className="filter-select">
        <option value="">All Breeds</option>
        <option value="breed1">Breed 1</option>
        <option value="breed2">Breed 2</option>
      </select>
      <select className="filter-select">
        <option value="">All Ages</option>
        <option value="puppy">Puppy</option>
        <option value="adult">Adult</option>
      </select>
      <select className="filter-select">
        <option value="">All Sizes</option>
        <option value="small">Small</option>
        <option value="medium">Medium</option>
        <option value="large">Large</option>
      </select>
    </div>
  );
};

export default Filters;
