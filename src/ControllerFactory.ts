import Controller from "./Controller";
import Keyset from "./Keyset";
import keyconfig from "./keyconfig.json";

class ControllerFactory {
    private keys: Keyset[];
    private static _currentKeyset = 0;
    constructor() {
        this.keys = keyconfig.keysets;
    }

     createController(): Controller {
        return new Controller(this.keys[ControllerFactory._currentKeyset++]);
    }

}

export default ControllerFactory;