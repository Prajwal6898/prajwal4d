#!/usr/bin/env python3

def get_user_input():
    """Get user input for next instruction"""
    try:
        user_input = input("\n🤖 What would you like me to do next? (or 'exit' to stop): ").strip()
        
        if user_input.lower() in ['exit', 'quit', 'stop', 'done']:
            print("👋 Task completed! Goodbye!")
            return None
            
        if not user_input:
            print("⚠️ Please provide an instruction.")
            return get_user_input()
            
        return user_input
        
    except KeyboardInterrupt:
        print("\n\n👋 Task interrupted! Goodbye!")
        return None
    except Exception as e:
        print(f"❌ Error: {e}")
        return None

if __name__ == "__main__":
    result = get_user_input()
    if result:
        print(f"📝 User instruction: {result}") 