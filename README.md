# Serverless template

Running a serverless project locally might be a difficult task and not every Junior can do it, that's why this template keeps all in cloud, we do not have script to run an application locally, when we push a code in remote branch we up totally new application and give a link to it.

Template consist of two folder, each of them for separate repository, one for business logic and another for global e2e test flow, we need it because we can not implement every business check in one repo, since one repo consist logic of one service. Each service has its own test flow, but they has to be local for one service.

In the code you may notice redundant comments - just remove them, it is for author, you may remove all comments before use this template, it would be more right. The same about README files.
