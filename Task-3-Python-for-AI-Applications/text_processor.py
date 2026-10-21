from collections import Counter
import string
import json


def process_text(text):
    # Remove punctuation and convert text to lowercase
    cleaned_text = text.lower().translate(
        str.maketrans("", "", string.punctuation)
    )

    # Split text into words
    words = cleaned_text.split()

    # Count how often each word appears
    word_counts = Counter(words)

    # Organize the results
    result = {
        "original_text": text,
        "total_words": len(words),
        "unique_words": len(set(words)),
        "word_frequency": dict(word_counts)
    }

    return result


def main():
    print("=" * 40)
    print("       PYTHON TEXT PROCESSOR")
    print("=" * 40)

    text = input("\nEnter some text: ").strip()

    if not text:
        print("Error: Please enter some text.")
        return

    result = process_text(text)

    print("\n--- TEXT ANALYSIS RESULTS ---")
    print(json.dumps(result, indent=4))


if __name__ == "__main__":
    main()