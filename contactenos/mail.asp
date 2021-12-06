<!--METADATA TYPE="typelib" UUID="CD000000-8B95-11D1-82DB-00C04FB1625D" NAME="CDO for Windows 2000 Type Library" -->
<!--METADATA TYPE="typelib" UUID="00000205-0000-0010-8000-00AA006D2EA4" NAME="ADODB Type Library" -->
<%

DIM sBody, sFrom, x

'step through the form items
FOR x = 1 TO (Request.Form.Count())
   IF NOT Request.Form(x) = "" THEN
      sBody = sBody & vbCrLf & Request.Form.Key(x) & " = " & Trim(Request.Form(x))
   END IF
NEXT

' setup the from
IF Request.Form("EMAIL") = "" THEN
       sFrom = "Anonymous"
ELSE
      sFrom = Request.Form("EMAIL")
END IF

' mail section - setup of cdo for 2000
DIM iMsg, Flds, iConf

Set iMsg = CreateObject("CDO.Message")
Set iConf = CreateObject("CDO.Configuration")
Set Flds = iConf.Fields

Flds(cdoSendUsingMethod) = cdoSendUsingPort
Flds(cdoSMTPServer) = "127.0.0.1"
Flds(cdoSMTPServerPort) = 25
Flds(cdoSMTPAuthenticate) = cdoAnonymous ' 0
Flds.Update

With iMsg
   Set .Configuration = iConf
   .To = "stivenvargas@destinovirtual.net; andresclavijo@destinovirtual.net"
   .From = sFrom
   .Sender = "formulario@paginaweb.com"
   .Subject = "Formulario Contactenos"
   .TextBody = "" & sBody & ""
   .Send
End With
%>
<script>
document.location.replace('http://www.destinovirtual.net/contactenos/enviado.html');
</script>