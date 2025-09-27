// 简化的工具函数
export function getNetlifyContext() {
    return process.env.CONTEXT;
}

export const uploadDisabled = process.env.NEXT_PUBLIC_DISABLE_UPLOADS?.toLowerCase() === "true";