import { memo, useCallback, useRef, useState } from 'react';

// hooks
import useDeleteTodo from '../../hooks/mutations/useDeleteTodo';
import useUpdateTodo from '../../hooks/mutations/useUpdateTodo';

// style
import {
  Content,
  DeleteButton,
  Title,
  UpdateButton,
  UpdateInput,
  Wrapper,
} from './styled';

export type Props = {
  id: string;
  title: string;
  content: string;
  createdAt?: string;
  updatedAt?: string;
};

function Todo({ id, title, content }: Props) {
  const formRef = useRef<HTMLFormElement>(null);
  const [modifyToggle, setModifyToggle] = useState(false);
  const titleInputRef = useRef<HTMLInputElement>(null);
  const contentInputRef = useRef<HTMLInputElement>(null);
  const updateMutation = useUpdateTodo();
  const deleteMutation = useDeleteTodo();

  const onClickUpdate = useCallback(() => {
    setModifyToggle((prev) => !prev);
    if (!modifyToggle || !formRef.current) {
      return;
    }

    const form = new FormData(formRef.current);
    const todoPayload = {
      title: form.get('title') as string,
      content: form.get('content') as string,
    };

    updateMutation.mutate({ id, todoPayload });
  }, [modifyToggle]);

  const onClickDelete = useCallback(() => {
    deleteMutation.mutate(id);
  }, []);

  return (
    <Wrapper>
      {modifyToggle ? (
        <form ref={formRef}>
          <UpdateInput
            ref={titleInputRef}
            name="title"
            type="text"
            defaultValue={title}
          />
          <UpdateInput
            ref={contentInputRef}
            name="content"
            type="text"
            defaultValue={content}
          />
        </form>
      ) : (
        <div>
          <Title>{title}</Title>
          <Content>{content}</Content>
        </div>
      )}
      <div>
        <UpdateButton type="button" onClick={onClickUpdate}>
          {modifyToggle ? '✅' : '⚙️'}
        </UpdateButton>
        <DeleteButton type="button" onClick={onClickDelete}>
          🗑️
        </DeleteButton>
      </div>
    </Wrapper>
  );
}

export default memo(Todo);
