import {useState} from "react";
import {ToggleButton} from "react-bootstrap";

const CheckButton = () => {
    const [checked, setChecked] = useState(false);

    return (
        <>
            <ToggleButton
                className="mb-2"
                id="toggle-check"
                type="checkbox"
                variant="outline-primary"
                checked={checked}
                value="1"
                onChange={(e) => setChecked(e.currentTarget.checked)}>
                Checked
            </ToggleButton>
        </>
    );
}

export default CheckButton;