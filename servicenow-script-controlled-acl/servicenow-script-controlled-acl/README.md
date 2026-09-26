# Script-Controlled ACL – Restrict Record Access Based on Field Value

A ServiceNow security lab that demonstrates record-level access control using custom roles, a custom table, ACLs, a data condition, and a scripted ACL.

## Project objective

Restrict access to `u_institution_details` records so that EEE users can read EEE records, while administrators retain full access. Additional ACLs control create, write, and delete operations.

## Project components

### Custom table

- Label: `Institution Details`
- Name: `u_institution_details`
- Extends: `false`

### Fields

| Field | Type |
|---|---|
| Student Roll Number | Auto Number |
| Student Name | Reference → User |
| Faculty Name | Reference → User |
| Branch | Choice: ECE, EEE, CSE |
| Email | String |
| Phone Number | String |
| Description | Multi String |

### Roles

- `bb1` — Read
- `bb2` — Create
- `bb3` — Write/Edit
- `bb4` — Delete

The lab assigns all four roles to the EEE test user.

## ACL configuration

| ACL | Operation | Required role | Data condition |
|---|---|---|---|
| Read | `read` | `bb1` | Branch is EEE |
| Create | `create` | `bb2` | None |
| Write | `write` | `bb3` | None |
| Delete | `delete` | `bb4` | None |

The Read ACL is Advanced and uses the script in `scripts/read_acl.js`.

## Read ACL logic

The lab script:
1. Allows users with the `admin` role.
2. Allows users with `bb1`.
3. Returns `false` for everyone else.

The Read ACL also has the Data Condition `Branch is EEE`. ServiceNow evaluates ACL conditions and scripts as part of access control, so keep the Data Condition configured in the instance.

## Verification

Expected verification from the lab:

- A user with `bb1` can view EEE branch records.
- A user without the required role cannot view the records.
- An admin can view all records.
- A user with `bb1` + `bb2` can create records.
- A user with `bb1` + `bb2` + `bb3` can edit records.
- A user with `bb1` + `bb2` + `bb3` + `bb4` can delete records.

## ServiceNow setup order

1. Create the EEE test user.
2. Create roles `bb1`, `bb2`, `bb3`, `bb4`.
3. Assign the roles to the EEE user.
4. Create `u_institution_details`.
5. Add the required fields.
6. Create ECE, EEE, and CSE sample records.
7. Elevate to `security_admin`.
8. Create the Read ACL.
9. Create the Create ACL.
10. Create the Write ACL.
11. Create the Delete ACL.
12. Impersonate/test users and record screenshots.

## Repository structure

```text
servicenow-script-controlled-acl/
├── README.md
├── .gitignore
├── scripts/
│   └── read_acl.js
├── documentation/
│   ├── acl-configuration.md
│   └── verification-checklist.md
└── screenshots/
    └── .gitkeep
```

## Security

Do **not** commit ServiceNow instance URLs containing private details, usernames, passwords, API tokens, or other credentials.

## Source

This repository is based on the provided lab document:

**Script-Controlled ACL – Restrict Record Access Based on Field Value**

ServiceNow ACLs are used to restrict access to data by requiring users to pass configured requirements.
