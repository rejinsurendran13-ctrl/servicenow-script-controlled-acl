/*
 * Script-Controlled ACL
 * Table: u_institution_details
 * Operation: read
 *
 * Lab configuration:
 * - Data Condition: Branch is EEE
 * - Required role: bb1
 * - Advanced: true
 *
 * Keep the Branch data condition configured in the ServiceNow ACL.
 */

(function () {
    // Allow admin users full access
    if (gs.hasRole('admin')) {
        return true;
    }

    // Allow users with the bb1 role
    if (gs.hasRole('bb1')) {
        return true;
    }

    // Deny access for all others
    return false;
})();
