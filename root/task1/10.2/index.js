// Test if a binary tree is symmetric.

const areSymmetrics = (T1, T2) => {
    if (!T1 && !T2) return true;
    if ((!T1 && T2) || (T1 && !T2)) {
        return false;
    }
    return T1.value == T2.value && areSymmetrics(T1.right, T2.left) && areSymmetrics(T1.left, T2.right);
}

const isSymmetric = (T) => {
    if (!T) return true;
    return areSymmetrics(T.right, T.left);
}
