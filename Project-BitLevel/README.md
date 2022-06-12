# Project-BitLevel

### 1.0 - Introducción                                     
### 1.2 - Diagrama inicial del conjunto del proyecto        
### 2 - Metodología Incremental
### 3.0 - Requisitos/Análisis
### 3.1 - Partes Interesadas
### 3.2 - Requisitos funcionales.
### 3.3 - Requisitos no funcionales
### 3.4 - Requisitos sistema 
### 3.5 - Diagrama de casos de uso
### 3.6 - Documento detallado de requisitos
###       Secuencia normal
###       Secuencia Alternativa
### 3.7 - Matriz Requisitos/Tecnologías
### 3.8 - Modelo Entidad-Relación
### 4.0 - Diseño
### 4.1 - Diagrama de paquetes
### 4.2 - Diagrama de clases
### 4.3 - Diagrama de secuencia
### 4.4 - Paso a relacional y normalización
    Modelo Relacional
## 1.0 - Introducción
### 1.1 - Descripción propuesta/problema.

[Nombre del proyecto]  
BitLevel  
[Nombre integrantes]  
Kevin Coaquira  
Heber M.Rodríguez  
Rafa Pérez  
[Fecha inicio proyecto]  
21/03/2022  
[Descripción proyecto]  
En base a un acuerdo e intereses en común de los integrantes del proyecto, el tema que
engloba la propuesta son las criptomonedas y tecnología blockchain, inspirados en sitios
web ya existentes de visualización, custodia y gestión de estos activos digitales como [Coingecko.com](https://www.coingecko.com/es),[Coinmarketcap.com](https://www.coingecko.com/es),[Coinpaprika.com](https://coinpaprika.com/) y más alternativas, nace el concepto
de **BitLevel** una plataforma web como centro de información confiable sobre activos
criptográficos.  
Los usuarios en función de su nivel de registro/inscripción se catalogan en **Usuario no
registrado**, **Usuario default** y **Usuario premium**.  
Todos los usuarios cuentan con una serie de funcionalidades comunes como son: realizar
una búsqueda en el listado de criptomonedas aplicando una serie de filtros, consultar su
apartado de portfolio donde se listaran los activos que posee el usuario, consultar la
sección de noticias relacionadas con el ecosistema blockchain y aplicar un cambio la
apariencia del sitio web, tema oscuro y tema claro (default).  
  
El **Usuario no registrado** cuenta, además de las funcionalidades básicas descritas
anteriormente, con la posibilidad de probar durante un tiempo limitado y con saldo ficticio
una cuenta demo con el objetivo de desbloquear más funcionalidades e invitar al usuario a
registrarse.  
  
Un **Usuario registrado**, realiza un Login y Logout, tiene acceso a un objeto de vital
importancia en la plataforma, su **wallet** / billetera, permitiendo así desbloquear las funciones de compra-venta de criptomonedas, almacén de las mismas, acceso al historial de transacciones realizadas y un método de ahorro/bloqueo de activos gestionado por el
usuario con recompensa de intereses denominado staking, del cual se darán más detalles
en posteriores versiones de la documentación.  
Relacionado a la gestión de la cuenta e incentivos diarios, un usuario ya registrado puede
cambiar su contraseña actual, subir imagen a su avatar, recibir recompensa diaria por check
in en la plataforma como método de afiliación, acceso al conversor de monedas y con la
iniciativa de crear una comunidad ligada a la plataforma, una serie de vistas donde se
detalle documentación relacionada al mundo de las criptomonedas cubriendo desde
conceptos básicos para los menos familiarizados a términos concretos en BitLevel Academy
y un apartado de preguntas frecuentes (FAQ).  
  
Un **Usuario Premium**, dispone de una serie de características especiales así como la
posibilidad de configurar alertas personalizadas para el aviso de cambio de precio de un
activo, descuentos en la compra-venta de activos, participación en sorteos y solicitar una
tarjeta de crédito con una serie de ventajas que se documentará posteriormente.  
  
La figura del **Admin** representa una línea de seguridad para los usuarios, dentro de las
funciones que puede desempeñar el administrador es recibir alertas de inicio de sesión
fraudulentas y el envío de correo phishing a los usuarios, la creación de usuarios para
realizar pruebas (testing) y backup de seguridad para asegurar la integridad de los datos.  
  
## 1.2 - Diagrama inicial del conjunto del proyecto

![image](https://user-images.githubusercontent.com/91737963/167315220-799957a3-3b40-4ec3-9388-c67effcf1620.png)
  
## 2 - Metodología Incremental
  
![image](https://user-images.githubusercontent.com/91737963/167315256-237c2bf9-db65-47c4-a28d-93cca9dc7fb6.png)
  
El modelo incremental combina elementos del modelo en ‘Cascada’, con la filosofía
interactiva del modelo ‘Prototipado’ que veremos más adelante. Como se muestra en la
figura anterior, el modelo incremental aplica secuencias lineales de forma escalonada mientras progresa el tiempo en el calendario. Cada secuencia lineal produce un incremento
del software. El primer incremento generalmente es un producto esencial denominado
núcleo.  

Como su nombre lo indica esta metodología consta de ir aumentando las funcionalidades
de un programa a medida que se hacen iteraciones o surgen nuevas necesidades del
programa. Cada incremento es solo una fracción del producto final del programa e implica
una entrega del proyecto cada vez que se hace un incremento.  
## 3.0 - Requisitos/Análisis  
### 3.1 - Partes Interesadas.
####  USUARIO (NO REGISTRADO)
####  USUARIO (REGISTRADO)
####  USUARIO (PREMIUM)
####  ADMIN  
### 3.2 - Requisitos funcionales.
Requisitos primarios  
Requisitos secundarios  
1. Usuario no registrado:  
1.1. RF01-Demo 
1.2. RF02-Filtrar Crypto  
1.3. RF03-Cambiar tema web  
1.4. RF04-Registrarse  
1.5. RF05-Visitar Portafolios  
1.6. RF06-Consultar Noticias  
2. Usuario "Default":  
2.1. RF02-Filtrar Crypto  
2.2. RF03-Cambiar tema web  
2.3. RF05-Visitar Portafolios  
2.4. RF06-Consultar Noticias  
2.5. RF07-Recompensas  
2.6. RF08-Comprar Crypto  
2.7. RF09-Vender Crypto  
2.8. RF10-Resetear contraseña / qr 2fa  
2.9. RF11-Consultar registro de transacciones  
2.10. RF12-Login  
2.11. RF13-Logout  
2.12. RF17-Conversiones de Crypto  
2.13. RF18-BitLevel Academy  
2.14. RF19-Preguntas frecuentes  
2.15. RF20-Stacking  
3. Usuario "Premium":  
3.1. RF02-Filtrar Crypto  
3.2. RF03-Cambiar tema web  
3.3. RF05-Visitar Portafolios  
3.4. RF06-Consultar Noticias  
3.5. RF07-Recompensas diarias  
3.6. RF08-Comprar Crypto  
3.7. RF09-Vender Crypto  
3.8. RF10-Resetear contraseña/qr 2fa  
3.9. RF11-Consultar registro de transacciones  
3.10. RF12-Login  
3.11. RF13-Logout  
3.12. RF14-Alerta de Precio  
3.13. RF15-Descuento comisiones  
3.14. RF16-Participar en sorteos  
3.15. RF17-Conversiones de Crypto  
3.16. RF18-BitLevel Academy  
3.17. RF19-Preguntas frecuentes  
3.18. RF20-Stacking  
3.19. RF21-Virtual Card  
4. Admin:  
4.1. RF22-Recibir alertas de robo sin confirmar "phising" "fuerza bruta"  
4.2. RF23-Registro de transacciones  
4.3. RF24-Crear usuarios  
4.4. RF25-Backup  
### 3.3 - Requisitos no funcionales  
RnF01: La aplicación debe ser transparente para el usuario.  
RnF02: Los usuarios deben ser verificados para cumplir con la normativa KYC (Know Your Customer).  
RnF03: La aplicación debe ofrecer escalabilidad y confianza al usuario.  
RnF04: La aplicación debe ofrecer confianza al usuario al depositar capital.  
RnF05: La aplicación debe tener un servicio de respaldo por si el api consumido da algún tipo de error.  
### 3.4 - Requisitos sistema  
RS01:Los servicios de la plataforma deben estar disponibles las 24h.  
### 3.5 - Diagrama de casos de uso.  
![image](https://user-images.githubusercontent.com/91737963/167873194-8ff0e117-be67-4f69-b158-1fddcf435e2f.png)
### 3.6 - Documento detallado de requisitos  
Documento detallado de casos de uso  
![image](https://user-images.githubusercontent.com/91737963/167924356-47918dce-d51c-4940-8ade-acbfdbf8e2ad.png)  
Secuencia normal  
![image](https://user-images.githubusercontent.com/91737963/167924582-f2659c45-6685-4f07-beac-99fa4b34314f.png)  
![image](https://user-images.githubusercontent.com/91737963/167924625-64212cf9-5066-4955-b202-bfd5cae9eb01.png)
Secuencia Alternativa  
![image](https://user-images.githubusercontent.com/91737963/167924715-cc347ed8-ec1b-4fe6-8b9d-4ed3d099c1aa.png)
![image](https://user-images.githubusercontent.com/91737963/167924755-6f7f3d4a-f69e-470c-a24a-cecad26feb73.png)  
### 3.7 - Matriz Requisitos/Tecnologías  
![image](https://user-images.githubusercontent.com/91737963/167924960-6130fbfa-ee9c-414f-9090-76fd2a05c1f5.png)  
### 3.8 - Modelo Entidad-Relación  
![image](https://user-images.githubusercontent.com/91737963/167925201-921a7213-e3ce-430d-8d28-ee813bffcafb.png)  
## 4.0 Diseño  
### 4.1 - Diagrama de paquetes  
![image](https://user-images.githubusercontent.com/91737963/167925437-93c09948-a8c2-478f-88cb-131f60f69b57.png)  
### 4.2 - Diagrama de clases  
![image](https://user-images.githubusercontent.com/91737963/167925565-5c5be68e-ec06-407a-8e6e-e67459596f7a.png) 
### 4.3 - Diagrama de secuencia  
![image](https://user-images.githubusercontent.com/91737963/167925685-54b596c3-3b3a-48de-99d4-9590ccf899a4.png)  
### 4.4 - Paso a relacional y normalización  
**Modelo Relacional**  
**UserRegistered** (**Username**, premium, Email, Password, ASCII_QR, Credit, QR, EmailVerified, EmailOTP, Mailed, AccVerified, AccSecurity, TimeAttempt, Description, imageProfile)  
**UserCryptos**(**IDVault**, Label, Ammount)  
**UregisteredCryptos**(**Username,ID**)  
**Transactions**(**ID**, UserRegisteredFK, Date, Ammount, Coin, Destination, Origin, Description, Premium)  
**UregisteredTrans** (**Username, ID**)
**LoginAttempts**(**Username,CountAttempt, Date**)
**Admin**(AdminUsername, Password, Email,Description, TimeAttempt, AccSecurity, AccVerified, ASCII_QR, QR, Mailed, EmailOTP)
**UserNonRegistered**(SessionToken, DemoUsername, DemoCount, Balance)  
**DemoTransactions** (**ID**, UserNoRegFK, Username, Data, Ammount, Coin, Destination, Origin, Description, Demo, Premium)  
**DemoUserCryptos**(**IDVault**, Label, Ammount)
