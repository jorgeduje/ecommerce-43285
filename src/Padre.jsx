const Padre = ({children, title}) => {
    
  return (
    <div>
        {children}
      <h2>{title}</h2>
      <h2>Subtitulo del post</h2>
      
    </div>
  );
};

export default Padre;
