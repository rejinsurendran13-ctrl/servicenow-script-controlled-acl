# ACL Configuration

## 1. Read ACL

- Type: `record`
- Operation: `read`
- Name: `u_institution_details`
- Active: `true`
- Advanced: `true`
- Requires role: `bb1`
- Data condition: `Branch is EEE`
- Script: `scripts/read_acl.js`

## 2. Create ACL

- Type: `record`
- Operation: `create`
- Name: `u_institution_details`
- Active: `true`
- Requires role: `bb2`
- Data condition: none

## 3. Write ACL

- Type: `record`
- Operation: `write`
- Name: `u_institution_details`
- Active: `true`
- Requires role: `bb3`
- Data condition: none

## 4. Delete ACL

- Type: `record`
- Operation: `delete`
- Name: `u_institution_details`
- Active: `true`
- Requires role: `bb4`
- Data condition: none

## Important

The lab's Read ACL uses both a role requirement and the `Branch is EEE` data condition. Do not remove the data condition when reproducing the lab.
