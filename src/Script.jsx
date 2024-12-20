import { AiOutlineCloseSquare } from "react-icons/ai";
const Script = ({ scriptOpenPopup }) => {
  return (
    <div
      onClick={scriptOpenPopup.bind(this, false)}
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
          <h1 style={{ margin: 0 }}>Script</h1>

          <div
            onClick={scriptOpenPopup.bind(this, false)}
            style={{
              cursor: "pointer",
              position: "absolute",
              top: 10,
              right: 10
            }}
          >
            <AiOutlineCloseSquare />
          </div>
        </div>
        {/* Body */}
        <div>
        <section class="container">
            <form>
                <fieldset> 
                  {/* Fieldset to collect the script used by the influencer */}
                    <legend>Script</legend>
                    <div class="contactFields">
                        <div class="field">
                            <label class="form__label field__label" for="ContactForm-body">Please enter below:</label>
                            <textarea rows="10" id="ContactForm-body" class="text-area field__input" name="contact[Comment]" placeholder="Script submission"></textarea>
                        </div>
                        <div class="contact__button">
                            <button type="submit" class="button">Send</button>
                        </div>
                    </div>
                </fieldset>
            </form>
        </section>
        </div>
        {/* Footer */}
        <footer
          style={{ borderTop: "1px solid lightgray", paddingTop: "10px" }}>
          Written by Todd Taylor
        </footer>
      </div>
    </div>
  );
};
export default Script;