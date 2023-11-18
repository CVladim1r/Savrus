<script type="text/javascript" src="http://code.jquery.com/jquery-1.4.4.min.js"></script>
$(document).ready(function() {
$("body").css("display", "none"); /** body (здесь и далее) означает, что эффект применяется ко всей странице. Можно изменить на идентификаторы любых элементов (#content, .comments и т.д.) */
$("body").fadeIn(500); /** время появления в миллисекундах */
 
$("a.fade").click(function(event){ /** a.fade означает, что данное решение будет работать только при нажатии на ссылки с классом (class) "fade" (можно изменить на свой) */
event.preventDefault();
linkLocation = this.href;
$("body").fadeOut(500, redirectPage); /** время изчезания в миллисекундах */
});
function redirectPage() {
window.location = linkLocation;
}
});