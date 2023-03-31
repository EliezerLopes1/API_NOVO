//import { AiOutlineCloseSquare } from "react-icons/ai";
import "./PopupEdicao.css"

const PopupEdicao = ({ setIsOpenPopup }) => {
  return (
    <div
      onClick={setIsOpenPopup.bind(this, false)}
      style={{
        position: "fixed",
        background: "rgba(0,0,0,0.6)",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,

        display: "flex",
        alignItems: "center",
        justifyContent: "center"
      }}
    >
      {/* Content */}
      <div
        onClick={(e) => e.stopPropagation()}
        style={{
          position: "relative",
          background: "white",
          borderRadius: "8px",
          width: "250px",
          padding: "20px 10px",
          animation: "dropTop .3s linear"
        }}
      >
        {/* Header */}
        <div
          style={{ borderBottom: "1px solid lightgray", paddingBottom: "10px" }}
        >
          <h1 style={{ margin: 0 }}>Editar informações</h1>
          <div
            onClick={setIsOpenPopup.bind(this, false)}
            style={{
              cursor: "pointer",
              position: "absolute",
              top: 10,
              right: 10
            }}
          >
          </div>
        </div>
        {/* Body */}
        <div>
          <p>Email:</p>
          <input type="text" />
          <p>Nome de usuário:</p>
          <input type="text" />
          <p>Telefone:</p>
          <input type="text" />
          <p>Endereço (opcional):</p>
          <input type="text" />
        </div>
        {/* Footer */}
        <footer
          style={{ borderTop: "1px solid lightgray", paddingTop: "10px" }}
        >
          Footer here
        </footer>
      </div>
    </div>
  );
};
export default PopupEdicao;
