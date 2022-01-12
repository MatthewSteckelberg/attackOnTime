
function Navbar() {

return (
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
  <h1 class="navbar-brand" >Attack on Time</h1>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarNavDropdown">
    <ul class="navbar-nav">
      <li class="nav-item active">
        <a class="nav-link" href="/">Home <span class="sr-only">(current)</span></a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="/Login">Login</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="/#">Game Descriptions</a>
      </li>
      <li class="nav-item dropdown">
        <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Games
        </a>
        <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
          <a class="dropdown-item" href="window">Bay Window</a>
          <a class="dropdown-item" href="flashlight">Flashlight</a>
          <a class="dropdown-item" href="drag">Drag Counter</a>
          <a class="dropdown-item" href="bookshelf">Bookshelf</a>
          <a class="dropdown-item" href="picture">Picture Tear</a>
        </div>
      </li>
    </ul>
  </div>
</nav>
)

};

export default Navbar;