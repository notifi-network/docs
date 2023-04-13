---
sidebar_position: 3
---

# Getting started & examples

## In progress

<!--
Rough decision making chart for what to use: 



Do you require special UI elements for users to sign up to your alert (e.g. sliders, buttons, etc. to pick threshholds)? 

- Yes -> build UI components and use Notifi React Hooks (if on React) or Frontend Client to create alerts 
- No -> Use Notifi React Card (if on React) or follow simple example of Frontend Client 

  Note: The React card has components for users to enter the target (Email, SMS, Telegram) and basic opt-in check boxes

What is the desired trigger for your alert? 

- Manual (e.g. announcement of new features) -> use Admin Panel - Send Test Messages or Community Manager to draft messages and send them
- Existing topic type (Price change, Balance change, etc.) -> use Admin Panel card config for React Card or pass correct `EventTypeItem` in `NotifiFrontendClient.ensureAlert()`
- Events on the blockchain (e.g. liquidation, certain transactions, etc.) -> this requires a custom parser, reach out to us. If you are able to run your own parser that monitors blockchain transactions, you can have it trigger notifications through the Node Client. 
- Off-chain events -> Reach out to us or run a service that calls Node Client to send out notifications. 


Example use cases and how to integrate: 

- Allow users to opt-in to announcements and product updates

  If on React configure a card in the Admin Panel and add the React Card to the dapp frontend. This will automatically set up relevant sources and filters. 
  If not on React use the Frontend Client to create alerts, make sure to use the correct topic id.
  Send out announcements from the Community Manager in the Admin Panel. 

- Send out alert when price of an asset on Coingecko changed 

  Same as announcements and product updates, use topic type price change. 
  Alerts will be send automatically whenever the coingecko price of a supported assets changes. 

  Note: For prices from outside Coingecko or other assets a more custom solution is required


- Send out alerts when a liquidation has happened 

  This requires a custom parser that can act as source for the alert. If Notifi provides this source, the React Card can be used (configured with the correct topic type) for creating alerts or by using the Frontend Client. Alerts will be triggered automatically in this case. 
  If the parser is not hosted by Notifi, a generic broadcast topic should be created, and the Node Client can be called to trigger alerts on that topic. For subscribing the React Card or Frontend Client can be used (with selecting the generic broadcast topic)

- Alert the user when their position reaches a certain LTV (loan-to-value) threshhold that the user can choose

  This requires a custom UI to allow users to choose their threshhold when subscribing as well as a custom parser as source for the alert. Build the UI components and use the React Hooks or Frontend Client to create the alerts. 
  Contact us for a custom parser as source, or alternatively you can run a service that uses the Node Client to send out notifications. 

  -->