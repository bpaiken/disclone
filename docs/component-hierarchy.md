## Component Hierarchy

**Home**
- SidebarContainer
- HeaderContainer
- ChannelIndexContainer
- MessageIndexContainer
- MemberIndexContainer
- DirectMessageIndexContainer

**SidebarContainer**
- Sidebar  
  + ServerIndex
  + DirectMessagesButton
  + AddServerButton

**HeaderContainer**
- Header
  + MemberIndexToggle
  + MessageSearchContainer
   
**ChannelIndexContainer**
- ChannelIndex
  + ChannelButtons

**MessageIndexContainer**
- MessageIndex
  + Messages
  + MessageFormContainer

**MemberIndexContainer**
- MemberIndex
  + MemberItems
    + MemberDetailContainer

**DirectMessageIndexContainer**
- DirectMessageIndex
  + DirectMessageItems

**CreateAccountContainer**
- AuthForm

**LoginContainer**
- AuthForm

**MemberDetailContainer**
- MemberDetail
  - MessageForm

**CreateServerContainer**
- CreateServer
  + CreateOrJoin
  + CreateServerForm
  + JoinServerForm



