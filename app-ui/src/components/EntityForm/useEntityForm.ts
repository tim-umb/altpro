/**********************************************************************
 *
 *   Component hook generated by Quest
 *
 *   Code Logic for the component goes in this hook
 *   To setup bindings that use the data here or call the functions here, use the Quest editor
 *   Do not change the name of the hook
 *
 *   For help and further details refer to: https://www.quest.ai/docs
 *
 *
 **********************************************************************/

import React from 'react';
import { EntityFormProps } from 'src/types';

type FormEntityData = {
  entityType: EntityFormProps[];
}

const useEntityForm = () => {
  const onEntityTypeChange = (): any => {};
  const onAccountNameChange = (): any => {};
  let data: FormEntityData = {
    entityType: [
      { value: 'person', text: 'Person' },
      { value: 'organization', text: 'Organization' },
      { value: 'place', text: 'Place' },
    ]
  };

  const fns: any = {onEntityTypeChange, onAccountNameChange};

  return { data, fns };
};

export default useEntityForm;
