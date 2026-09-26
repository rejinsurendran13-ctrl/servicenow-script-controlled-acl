# Verification Checklist

## User and roles

- [ ] EEE User created
- [ ] `bb1` created
- [ ] `bb2` created
- [ ] `bb3` created
- [ ] `bb4` created
- [ ] All four roles assigned to EEE User

## Table

- [ ] `u_institution_details` created
- [ ] Student Roll Number field added
- [ ] Student Name field added
- [ ] Faculty Name field added
- [ ] Branch field added with ECE, EEE, CSE choices
- [ ] Email field added
- [ ] Phone Number field added
- [ ] Description field added

## Sample data

- [ ] EEE record exists
- [ ] ECE record exists
- [ ] CSE record exists

## ACLs

- [ ] Read ACL created
- [ ] Read ACL uses `bb1`
- [ ] Read ACL has `Branch is EEE`
- [ ] Read ACL script added
- [ ] Create ACL uses `bb2`
- [ ] Write ACL uses `bb3`
- [ ] Delete ACL uses `bb4`

## Testing

- [ ] Test EEE User
- [ ] Test a user without the required role
- [ ] Test Admin
- [ ] Test Create
- [ ] Test Write/Edit
- [ ] Test Delete

Add screenshots to the `screenshots/` folder after testing.
