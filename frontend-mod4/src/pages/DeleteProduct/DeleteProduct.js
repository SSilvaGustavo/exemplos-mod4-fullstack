import React from "react";
import { Api } from "../../api/Api";

export default function DeleteProduct(props) {
  const id = props.match.params.id;

  const handleDelete = async (event) => {
    const response = await Api.buildApiDeleteRequest(Api.deleteUrl(id));

    if (response.status === 204) {
      // Delete product successfully

      // Navigate to home page
      props.history.push(`/`);
    } else {
      // Error
    }
  };

  return (
    <div className="card card--full">
      Você deseja excluir o item?
      <br />
      <br />
      <button className="button button--danger" onClick={() => handleDelete()}>
        Confirmar Exclusão
      </button>
    </div>
  );
}
