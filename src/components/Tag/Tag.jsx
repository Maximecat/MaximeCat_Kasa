import './Tag.css'
// Création des tags. Le nom de la fonction remplace la balise html "div" dans App.jsx
function Tag({ tagName }) {
    // Et return les valeurs de tout les éléments ayant un "tagName" 
    return (
        <div className="tag">{tagName}</div>
    );
}

export default Tag;