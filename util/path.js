import path from "path";
import { fileURLToPath } from 'url';
const filename = fileURLToPath(import.meta.url);
export const __dirnames = path.dirname(filename);


//by this function we get the parent directory.
//proces.mainModule.filename gives the path of the main module that started the application. 
// By using path.dirname() on this path, we can get the parent directory of the main module. 
// This is useful for constructing file paths relative to the main module's location.