export function dueDateFormat(date) {
    // 현재 날짜
    const currentDate = new Date();

    // 특정 날짜
    const dueDate = new Date(date);

    // 남은 일수 계산
    const timeDiff = dueDate.getTime() - currentDate.getTime();
    const daysRemaining = Math.ceil(timeDiff / (1000 * 60 * 60 * 24));

    return daysRemaining;
}
