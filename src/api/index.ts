import type { LoginResponse, User } from "@/interfaces"

export async function login(
    username: string,
    password: string
): Promise<LoginResponse | undefined> {
    const body = new URLSearchParams({
        username: username,
        password: password,
    })
    const response = await fetch("http://localhost:8000/auth/login", {
        method: "POST",
        body: body,
    })
    if (response.ok) {
        return await response.json()
    }
}

export async function fetchUsers(token: string | null): Promise<User[]> {
    const headers = new Headers()
    if (token) {
        headers.append("Authorization", `Bearer ${token}`)
    }
    const response = await fetch("http://localhost:8000/users", { headers })
    return await response.json()
}

export async function fetchUser(id: number, token: string | null): Promise<User | null> {
    const headers = new Headers()
    if (token) {
        headers.append("Authorization", `Bearer ${token}`)
    }
    const response = await fetch(`http://localhost:8000/users/${id}`, { headers })
    return await response.json()
}

export async function patchUser(id: number, userData: User, token: string | null) {
    const headers = new Headers()
    if (token) {
        headers.append("Authorization", `Bearer ${token}`)
    }
    const response = await fetch(
        `http://localhost:8000/users/${id}`,
        { method: 'PATCH', body: JSON.stringify(userData), headers }
    )
    return await response.json() 
}