import React, { memo } from 'react';
import { Table } from 'react-bootstrap';
import { shallowEqual, useSelector } from 'react-redux';
import { resourcesListSelector } from '../../../services/ResourcesList/redux/selectors/resourcesListSelectors';

function List() {
  const resourcesList = useSelector(resourcesListSelector, shallowEqual);

  return (
    <Table striped bordered hover variant='dark'>
      <thead>
        <tr>
          <th>#</th>
          <th>Name</th>
          <th>Pantone Value</th>
          <th>Year</th>
        </tr>
      </thead>
      <tbody>
        {resourcesList.map((resource) => (
          <tr key={resource.id}>
            <th>{resource.id}</th>
            <th>{resource.name}</th>
            <th>{resource.pantone_value}</th>
            <th>{resource.year}</th>
          </tr>
        ))}
      </tbody>
    </Table>
  );
}

export default memo(List);
